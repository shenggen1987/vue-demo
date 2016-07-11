import { UriBuilder } from './url';
import * as com from './ui';
import bridge from './bridge';
import tools from './tools';
import router from '../util/router'
import loadingGraphics from '../util/ui/hybrid/pageLoading/createLoading'

//缓存的路由对象
import { routingInstance } from '../vuex/loginstatus'

function parseJSON ( res ){
	return res.json();
}

function get_token (){
	let token = localStorage.getItem('session_token');
	return token && token.replace(/\"?/g, "");
}
/**
 * [completeUri 根据 URL  补充 完整的 url路径 ]
 * @param  {[string]} url [example: /article/recommend/]
 * @return {[string]}     [ example: http://m.dev.3dker.cn:8082/article/recommend/ ]
 */
function completeUri ( url ){
	let protocol = location.protocol === "file:" ? "http:" : location.protocol;
	let hostname = location.hostname ? (location.hostname + ":") : "3dker.cn";

	return protocol + "//" + hostname + location.port + url;
}

let httpFetchCallback = {};

//发送请求
function fetchTo ( u, options, callback, isView ,getsome){

	//HTTP请求开启loading动画
	loadingGraphics({
		type:0,
		show: true
	})

	//如果是hybrid不走fetch的接口
	if(tools.isHybrid()){
		//根据url把method 和 callback 缓存
		//纪录fetch method 及 callback
		//因为可能有多个请求同时发生，其url等参数也可能相同，
		//所以使用uuid作为键值，保证其缓存唯一性
		let uuid = tools.uuid();	
		let headers = options.headers;
		
		if(!!options.body) {
			let bodyCatch = JSON.parse(options.body);
			delete options.body;
			delete options.headers;
			options = Object.assign(options,bodyCatch);
		}

		//缓存在httpFetchCallback
		httpFetchCallback[ uuid ] = {
			callback : callback,
			method : options.method
		};	

		if( options.method === "post" ){

			let contentType = headers.get('content-type');
			let authToken = headers.get('x-auth-token');
			options = Object.assign( options, {
				"headers" : {
					"content-type" : contentType,
					"x-auth-token" : authToken
				}
			})
		}
		//通信时带上uuid, 在回调时从fetchCallback中拿到正确的callback
		return bridge.httpClient.send( u, Object.assign(options,{
			uuid : uuid
		}), ( json ) => {
			let param = json.param,
				uuid = json.param.uuid;	
			let current_data = httpFetchCallback[ uuid ];

			if( isView ){
    			com.ui.view_loading.show = false;
    		}
    		//已经退出
				if(reLogin( param.data )) {
					return false 
				}

			getsome 
				? current_data.callback( null, param.data[ getsome ]) 
		    	: current_data.callback( null, param.data.ret.result ); 

		    //取消动画
		    loadingGraphics({
				type:0,
				show: false 
			})

		    delete httpFetchCallback[ uuid ];

		    return null;

		});
	} 
	else {

		let request = new Request( u, options );

		return fetch( request )
			//做json parse处理  parseJSON
 	    	.then( json => {
 	    		return json.json();
 	    	})
	    	//接口必须按照json.ret.result结构，否则抛错
	    	.then(( json ) => { 
	    		loadingGraphics({
					type:0,
					show: false 
				})
				//已经退出
				if(reLogin( json )) {
					return false 
				}
	    		//是页面
	    		if( isView ){
	    			com.ui.view_loading.show = false;
	    		}
	    		return getsome 
	    					? callback( null, json[getsome]) 
    					    : callback( null, json.ret.result ); 
	    	})
			.catch((error) => {
				if( isView ){
					com.ui.view_loading.show = false;
					com.ui.loading.show = false;
					com.ui.view_load_fail.show = true;
					com.ui.view_load_fail.retryCb = function (){
						com.ui.view_loading.show = true;
						fetchTo( u, options, callback, isView );	
					};
				} else {
					return callback( error );
				}
			})
	}
}

//token登录过期 清除登录信息
function reLogin ( json ){
	let isLogout = json.ret.errCode === "logout";
	if( isLogout ){
		localStorage.removeItem('session_token');
		localStorage.removeItem('user');
		routingInstance.router.go("/login");
	}
	return isLogout;	
}

function paramParse ( url, options, callback , params){
	let opt, fn , getData

	if( typeof options === "function" && params.length === 2){
		opt = {};
		fn = options;
	} else if (typeof options === 'function' && params.length === 3 ) {
		opt = {};
		fn = options;
		getData = params[2]
	}else if (typeof options === 'object' && params.length === 4){
		opt = options;
		fn = callback;
		getData = params[3]
	}else {
		opt = options;
		fn = callback;
	}

	return {
		opt,
		fn,
		getData
	}
}

export default {
	get ( url, options, callback ,alldata, ...loading){
		let ar = arguments;
		let o = paramParse( url, options, callback , ar);

		return this.send(
			url, Object.assign( o.opt, {
				method : 'get',
				result_type : 'json'
			}), o.fn , o.getData
		);
	},
	post ( url, options, callback ,alldata){
		let ar = arguments;
		let o = paramParse( url, options, callback ,ar);

		return this.send(
			url, Object.assign( o.opt, {
				method : 'post'
			}), o.fn , o.getData
		);
	},
	send ( url, options, callback , getsome, LOADING){

		let isView = options.view || false;

		delete options.view;
		let u = new UriBuilder(completeUri( url )),  // example :  "http://m.dev.3dker.cn:8082/article/recommend"
			oc = Object.assign( options, {} ),
			content = {};

		let toWebViewMethod = oc.method;

		//默认为get请求
		if( !oc.method ) oc.method = 'get';
		//get请求
		if( oc.method === "get" ){
			u.params = oc;     //把  options  赋值给 U 对象的params     例如:{pagename: "homepagebannermobile", method: "get", result_type: "json"}
			//method已经没用啦
			delete u.params.method;			
		
		} else if( oc.method === "post" ){
			content.method = oc.method;

			//将method赋值给content的method后不需要在放入content.body中
			delete oc.method;
			//传入fetch的内容都需要做stringify处理
			content.body = JSON.stringify( oc );    // 请求体 赋值成  如 {"pagename":"homepagebannermobile","method":"get","result_type":"json"}

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('X-Auth-Token', get_token());
			content.headers = headers;
			options = content;
		}	

		//非webview, build新的uri	
		if( !tools.isHybrid() ){
			u = u.build();    //没有query的情况 还是返回的是原始的  URL  example :  http://m.dev.3dker.cn:8082/api/files/list
		} else {
			//url不需要重新build, 直接将原地址交给native
			u = url;
			//hybrid情况还是需要带method过去
			options.method = toWebViewMethod;
		}
		//发起请求
		return fetchTo( u, options, callback, isView , getsome);
	}	
}















