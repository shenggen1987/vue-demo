<!-- 分享 -->
<template>
	<div class="share-boxs" v-show="show">
		<div class="mui-popup-backdrop mui-active" style="display: block;" @click="closeShare"></div>
		<ul class="share-list">
			<li>
				<span class="mui-icon iconfont icon-qq"></span>
			</li>
			<li>
				<span class="mui-icon iconfont icon-pengyouquan"></span>
			</li>
			<li>
				<span class="mui-icon iconfont icon-weixin"></span>
			</li>
		</ul>
	</div>
</template>
<script>
  module.exports = {
    props: {
      show: {
        type: Boolean,
        default:false
      }
    },
    methods:{
    	closeShare(){
    		this.show = false;
    	}
    }
  }
</script>
<style lang='less' >
  .share-list{
  	position: fixed;
  	z-index: 999;
  	top: 50%;
  	left: 50%;
  	width: 100%;
  	transform: translate(-50%, -50%);
  	list-style: none;
  	li{
  		display: inline-block;
  		width: 30%;
  		text-align: center;
  		.iconfont{
  			font-size: 40px;
  			color: #FFF;
  		}
  		.icon-weixin{
  			color: #20CC28
  		}
  		.icon-qq{
  			color: #56abe4;
  		}

  	}
  }


</style>