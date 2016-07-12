let ua = navigator.userAgent;

export default {
	isInApp (){
		return !!/wireless/i.exec( ua );
	},	
	isAndroid (){
		return !!/android/i.exec( ua ) && this.isInApp();
	},
	isIOS (){
		 return !!/ipad|iphone|osx/i.exec( ua ) && this.isInApp();
	},
	isWeiXin (){
		return !!/MicroMessenger/i.exec( ua );
	},
	isFile (){
		return location.protocol === "file:"? true : false;
	},
	isHybrid (){
		return this.isAndroid() || this.isIOS() || this.isFile();
	},	
	isWeb (){
		return !isHybrid();			
	},
	isLogin () {
  		return !!localStorage.getItem( 'session_token' );
	},
	/*
	 * 将url search 转换为一个 object对象
	 * @public
	 * @returns {Oject}   example : 3dker.com/add?name=qiansimin&age=12 => {name:qiansimin,age:12}
	 */
	urlParamsToJSON(){
		var $u = location.seatch.slice( 1 ),
			 r = {};
		if( !!$u )	{
			$u = $su.split('&');
		} else {
			return r;
		}

		$u.forEach(function (el){
			var $n = el.split("=");
			r[$n[0]] = $n[1];
		});
		return r;
	},
	//深转换 对象转字符串
	j2s ( params, sep = "&", sep2 = "=" ){
		let r = [];
		for( let i in params ){
			if( typeof params[ i ] === "object" ){
				r.push(this.j2s( params[ i ], sep, sep2 ));
			} else {
		 		r.push( i + sep2 + params[ i ] );
			}
		}
		return r.join( sep );
	},
	/*
	 * 将object 转换为一个 url地址
	 * @public
	 * @param obj - 需要转换为url search的object
	 * @returns {String}
	 */
	jsonToUrlParams (obj){
		var $l = location.protocol + "//" + location.hostname + location.pathname;
	    if( typeof obj == "object" ){
	        var $k = Object.keys(obj),
	            $v = values(obj),
	            $r = "",
	            $max = $k.length - 1;

	        $k.forEach(function (el, i){
	            $r = $r + el + "=" + $v[i];
	            if( i < $max ){
	                $r += "&";
	            }
	        });
	        return $l + "?" + $r + location.hash;
	    } else {
	        return $l + location.hash;
	    }
	},
	uuid() {
	    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), 
	        uuid = new Array(36), 
	        rnd=0, 
	        r;

	    for (let i = 0; i < 36; i++) {
	        if (i==8 || i==13 ||  i==18 || i==23) {
	            uuid[i] = '-';
	        } else if (i==14) {
	            uuid[i] = '4';
	        } else {
	            if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
	            r = rnd & 0xf;
	            rnd = rnd >> 4;
	            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
	        }
	    }
	    
	    return uuid.join('');
	},
	nextTick ( cb ){
    //解决 setImmediate 兼容问题
    //所有模型解析相关统一调用 setImmediate 函数， 尽快释放UI线程
    return setImmediate( cb ) || (( handle ) => {
      let args = Array.prototype.slice.call(arguments,1);
      let invoke = () => { handle.apply( this, args ); };
      if( window.Promise )  
        Promise.resolve().then(invoke); 
      else if( !-[1,] ){
	        let head = document.documentElement.firstChild;
	        let script = document.createElement("script");
	        script.onreadystatechange = () => {
	          script.onreadystatechange = null;
	          head.removeChild( script );
	          invoke();
	        };
	        head.appendChild( script );
	      }else setTimeout( invoke );
	    })( cb );
	}
}	