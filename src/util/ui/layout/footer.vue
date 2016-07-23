<template>
<nav class="mui-bar mui-bar-tab" >
	<a class="mui-tab-item mui-active" href="javascript:;">
		<span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label" @click="routerGo('home')">首页</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-chat" v-link="{ name: 'score' }">
		<span class="mui-icon mui-icon-chat"></span>
		<span class="mui-tab-label">消息</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-contact" v-link="{ name: 'question' }">
		<span class="mui-icon mui-icon-contact"></span>
		<span class="mui-tab-label">问医生</span>
	</a>
	<a class="mui-tab-item" href="#tabbar-with-map" v-link="{ name: 'community' }">
		<span class="mui-icon mui-icon-compose"></span>
		<span class="mui-tab-label">记录</span>
	</a>
	<a class="mui-tab-item" href="javascript:;" @click="routerGo">
		<span class="mui-icon iconfont icon-03-0023"></span>
		<span class="mui-tab-label">药房</span>
	</a>
</nav>
<template>
<style lang='less' >
  .mui-bar-tab{
  	.mui-tab-item{
  		.icon-03-0023{
		  	top: 7px;
		  	font-size: 19px;
		  }
  	}
  	.mui-tab-item1{
        display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	    .mui-icon {
		    top: 3px;
		    width: 24px;
		    height: 24px;
		    padding-top: 0;
		    padding-bottom: 0;
		}
		.mui-tab-label {
		    font-size: 11px;
		    display: block;
		    overflow: hidden;
		    text-overflow: ellipsis;
		}
  		.icon-03-0023{
		  	top: 7px;
		  	font-size: 19px;
		  }
  	}
  } 

</style>
<script>
export default {
	name: 'layout-footer',
		data () {
			return {
				
			}
		},
		props : {
			
		},
	methods : {
		routerGo(){
			console.log(111111);
			this.$route.router.go({name:"home"});
		},
		returnBack () {
			this.$route.router.go({name:"home"});
		}
	}	
}
</script>