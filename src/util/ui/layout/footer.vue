<template>
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item1" href="javascript:;" @click="routerGo('home')">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item1"  href="javascript:;" @click="routerGo('community')">
			<span class="mui-icon mui-icon-chat"></span>
			<span class="mui-tab-label">患有社区</span>
		</a>
		<a class="mui-tab-item1" href="javascript:;" @click="routerGo('doctor')">
			<span class="mui-icon iconfont yisheng">&#xe603;</span>
			<span class="mui-tab-label">问医生</span>
		</a>
		<a class="mui-tab-item1" href="javascript:;" @click="routerGo('record')">
			<span class="mui-icon mui-icon-compose"></span>
			<span class="mui-tab-label">记录</span>
		</a>
		<a class="mui-tab-item1" href="javascript:;" @click="routerGo('pharmacy')">
			<span class="mui-icon iconfont icon-03-0023"></span>
			<span class="mui-tab-label">药房</span>
		</a>
	</nav>
</template>
<style lang='less' scope>
  .mui-bar-tab{
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
		 .yisheng{
			top: 7px;
			font-size: 20px;
		}
  	}
  } 

</style>
<script scope>
module.exports = {
	name: 'layout-footer',
	data () {
		return {
			
		}
	},
	props : {
		name: {
	        type: String,
	        default:''
	    }
	},
	methods : {
		routerGo(name){
			this.$route.router.go({name: name});
		}
	},
	ready(){
		console.log(this.name);
	}	
}
</script>