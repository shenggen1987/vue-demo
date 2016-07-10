import Vue from 'vue';

var ua = navigator.userAgent;

function isHybirdTest (){
    return ua.indexOf("wireless") > -1 && ua.indexOf("test") > -1   
}

function isH5Test (){
    return location.port === "8082" && location.hostname === "m.dev.3dker.cn";
}


let isLocal = isHybirdTest() || isH5Test()   //是否是本地环境


//格式化时间戳
Vue.filter('datatime',( date,format ) => {
	date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes(), //分
        "s": date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds(),//秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
})

//simple cdn 
Vue.filter('img-cdn', function (value, width, height) {
    let prefix = isLocal ? 'http://test-img.3dker.cn/' : 'http://cdnimg.3dker.cn/',
        style = '@800w_600h_100q',
        suffix = '_4e_238-238-238bgc.jpg'; 

    if(width > 0 && height > 0 && width <= 800 &&  height <= 600) {
        style =`@${width}w_${height}h_100q`
    }
    return prefix+value+style+suffix
})

//格式化字节
Vue.filter('byte-conversion', value => {
    if(typeof value !== 'number' && !Number.isFinite(value) && Number.isNaN(value) && !Number.isInteger(value)) {
        throw new Error('传入的数值好像有点问题')
    }
    let [unit, i] = [['B', 'KB', 'M', 'G'], 0]
    
    while (value > 1024) {
        value = value / 1024
        i++
    } 
    //如果是整数 那么就不需要保留两位小数了 
    let result =  Number.isInteger(value) ? value : value.toFixed(2) 
    return result + unit[i]
})

//搜索关键字加红
Vue.filter('search-marked', (value, seachinput) => {
    let reg = new RegExp(seachinput, "gi") 
    return  value.replace(reg, `<font color='#DC1111'><strong>${ seachinput }</strong></font>`)
})

/**
 * [字符串转化为对象]
 * @param  {[type]} 'toObject' [description]
 * @param  {[type]} (value,    someKey       [value:字符串对象  someKey: 自定义]
 * @return {[type]}            [description]
 */
Vue.filter('toObject', (value, someKey) => {
    return JSON.parse(value)[someKey]
})

//活动列表的映射中文名
Vue.filter('activityChinese', (value, type) => {
    let nameMap = {
        single: {
            name: '单页',
            type: 'singlepage'
        },
        signup: {
            name: '报名',
            type: 'acenroll'
        },
        dataupload: {
            name: '数据上传',
            type: 'uploadpage/uploaddata'
        },
        datashow: {
            name: '数据作品',
            type: 'displaypage/showdata'
        },
        articleupload: {
            name: '文章上传',
            type: 'uploadpage/uploadarticle'
        },
        articleshow: {
            name: '文章作品',
            type: 'displaypage/showarticle'
        },
        vote: {
            name: '投票',
            type: 'displaypage/showvote'
        },
        luck: {
            name: '抽奖',
            type: 'displaypage/lottery'
        }
    }
    return type == "name" ? nameMap[value].name : nameMap[value].type
})
