<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="javascript:;"></a>
      <a id="info" class="J-issue mui-pull-right" href="javascript:;">发布</a>
      <h1 class="mui-title">我要问诊</h1>
    </header>
    <div class="mui-content">
      <div class="mui-content-padded" style="margin: 5px;">
		<div class="mui-input-row" style="margin: 10px 5px;">
			<textarea id="textarea" rows="5" placeholder="描述你的问题..."></textarea>
		</div>
	  </div>
	  <div class="weui_cell">
	  	<div class="weui_uploader_bd">
	        <div class="weui_uploader_input_wrp">
	        	<span class="mui-icon iconfont icon-jiahao add-pic"></span>
	            <input class="weui_uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple="">
	        </div>
	    </div>

	  </div>
	  

    </div>
	


  </div>
</template>

<script>
	import share from '../../inc/share/index'
	export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {
            }
        },
        methods :{
            
        },
		components: {
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
	.J-issue{
		line-height: 44px;
	}
	.weui_cell{
		padding: 10px 15px;
	}
	.weui_uploader_bd{
		margin-bottom: -4px;
		margin-right: -9px;
		overflow: hidden;
	}
	.weui_uploader_files{
		list-style: none;
		margin: 0;
		padding: 0;
		.weui_uploader_file{
			float: left;
			margin-right: 9px;
			margin-bottom: 9px;
			width: 79px;
			height: 79px;
			background: no-repeat center center;
			background-size: cover;
			
		}
		.weui_uploader_status{
			position: relative;
			.weui_uploader_status_content {
			    position: absolute;
			    top: 50%;
			    left: 50%;
			    -webkit-transform: translate(-50%, -50%);
			    transform: translate(-50%, -50%);
			    color: #FFFFFF;
			}
		}
	}
	.weui_uploader_input_wrp {
	    float: left;
	    position: relative;
	    margin-right: 9px;
	    margin-bottom: 9px;
	    width: 77px;
	    height: 77px;
	    border: 1px solid #D9D9D9;
	    text-align: center;
	}
	.weui_uploader_input {
	    position: absolute;
	    z-index: 1;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    opacity: 0;
	    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	.add-pic{
		font-size: 46px;
		color: #ccc;
		line-height: 73px;
	}
</style>
