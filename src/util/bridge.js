import tools from './tools';
import rootHandle from '../components/root'
let appCallback = {};

class Bridge {
	constructor (){
		this.ua = navigator.userAgent;
		this.protocol = "sn3dker:";
		this.url = this.protocol + "//wireless/";
		this.platform = tools.isIOS() ? "ios" : "android";
		this.isInApp = false;
		this.appVersion = null;
		this.osVersion = null;
	}
	callNative ( module, method, params, callback = () => {} ){
		let url = this.build( module, method, params );

		appCallback[ method ] = callback;

		if( tools.isIOS()){
			return this.callIOS( url );
		} 
		else {	
			return this.callAndroid( url );
		}	
	}
	callIOS ( url ){
		let iframe = document.createElement("iframe"),
        	cont = document.body || document.documentElement;

	    iframe.style.display = "none";
	    iframe.setAttribute("src", url);
	    cont.appendChild( iframe );
	    setTimeout(() => {
	        iframe.parentNode.removeChild( iframe );
	        iframe = null;
	    }, 1000);
	}
	callAndroid ( url ){	
		this.callIOS( url );
	}
	build ( module, method, params = {} ){
		let url = this.url;
		params.t = +new Date;

		url += module;
		url += method;
		url += "?" + encodeURIComponent(j2s( params ))
		return url
	}
}


let bridge = new Bridge();

if( !window.app ) window.app = {};

window.app['callback'] = function ( json ){
	try {
		if( json.tagname  && appCallback[ json.tagname ] ){
			return appCallback[ json.tagname ]( json );
		}
	} catch ( e ){
		console.log(JSON.stringify( e ));
	}
}


function __bridge_callback( jsonObj ) {
	if (
		// jsonObj.param  && jsonObj.tagname 
		// && 
		jsonObj.tagname == "web_view_finished_load" 
		// && jsonObj.param.platform 
		) {	
        bridge.isInApp = true;
        bridge.appVersion = jsonObj.platform.version;
        bridge.osVersion = jsonObj.platform.osVersion;	
    }
 
    //webview调用 H5的路由
    //跳转vue路由
    if( jsonObj.param.url && jsonObj.param.action === "jump" ){
    	window.app['callback']( jsonObj )
    }
    else {
        let val = null;
    	try {
			val = window.app['callback']( jsonObj );		
        } catch ( e ) {
            console.log("callback execute error:" + e );
        }
        return val;
    }
    return -1;
};
//深转换 对象转字符串
function j2s ( params, sep = "&", sep2 = "=" ){
	let r = [];
	for( let i in params ){
		if( typeof params[ i ] === "object" ){
			r.push(j2s( params[ i ], sep, sep2 ));
		} else {
	 		r.push( i + sep2 + params[ i ] );
		}
	}
	return r.join( sep );
}
window.__bridge_callback = __bridge_callback;

export default {

	//通信的方法都是   写 函数  而不是写执行函数 

	//历史纪录     h5请求native
	history : {
		//后退    webview的后退  上一级的webview
		back (){
			//@param
			// `goto/` { Native Module Name }
			// `goto/` { Native Method Name & WebView Callback Name }
 			bridge.callNative('goto/', 'back', {});
		},
		//前进
		forward ( callback = () => {} ){
			bridge.callNative('goto/', 'forward', {});
		},
		//跳转   新开webview
		jump ( url, options, callback = () => {} ){
			bridge.callNative('goto/', 'jump', Object.assign({
				url : url
			}, options));	
		}
	},
	//用Native发送请求
	httpClient : {
		send ( url, options, callback ){
			let method = options.method;
			delete options.method;
			// console.log(j2s( options , ",", ":"));
			bridge.callNative('api/', 'httpClient', {
				//这里转换为 key:value,key2:value2 的格式
				urlQuery : j2s( options , ",", ":"),
				url : url,
				method : method
			}, callback);
		}	
	},	
	jsTonative : function (tagname) {
		bridge.callNative('api/', "showNavigation", {
			//这里转换为 key:value,key2:value2 的格式
			urlQuery : 1,
			url : 1,
			method : 1	
		});
	},
	//注册一个方法便于native执行
	//params 
	//@cont: 上下文环境
	//@tagname: tagname native 约定的函数方法
	//@fn : JS执行的方法
	//@arguments: native 执行该函数给的参数
	nativeTojs : function (cont,tagname,fn) {		
		appCallback[ tagname ] = fn.call(cont,arguments);
	},
	//给native发送 是否登录的回执
	checkTheLoginStatus: function (callback) {
		bridge.callNative('api/', 'checkTheLoginStatus', {}, callback)
	},
	/**
	 * [commonMethods ]
	 * @param  {[type]}   methods  [description]
	 * @param  {Object}   options  [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	commonMethods: function (methods, options={}, callback = function () {}) {
		bridge.callNative('api/', methods, options, callback)
	}
}



