import tools from './tools';
import app from './bridge';
import routerMap from '../routes.json';
export default {
	back ( callback = ()=> {} ){		
		if( tools.isHybrid() ){
			app.history.back();//hybrid下的h5跳native
		} else {
     		window.history.back()     //bakc() 返回上一页   go(-1) 返回上一页 并且 刷新
     		return false 
		}
	},
	forward ( callback = ()=> {} ){
		if( tools.isHybrid() ){
			app.history.forward();
		} else {	
			history.forward();
		}
	},
	/**
	 * @param  {[type]}
	 * @param  {router Boolean  true :当前的对象是组件对象还是在路由里面的router对象}
	 * @return {[type]}
	 */
	jump ( url, jumptitle, router ){
		if( tools.isHybrid() ){
			let aim = null,
				nativeURL = routerMap[ url ]; 
			let isNativePage = nativeURL && nativeURL.native != undefined 
							&& nativeURL.native.length > 0;
			let target = "webview";
			
			//跳转至native页面
			if( isNativePage ) {
				aim = nativeURL.native;	
				target = "native";
				app.history.jump( aim, { "target" : target, jumpTitle: encodeURIComponent(jumptitle) });
			}
			//跳转至webview 
			else {
				aim = url;				
				app.history.jump( aim, { "target" : target, jumpTitle: encodeURIComponent(jumptitle) });
			}
		} else { 
			//h5 下面的跳转  不需要jumptitle的属性
			if(router) {
				router.go( url )
			}else {
				this.$router.go( url )
			}
		}
	},
	//检查是否登录
	
}


