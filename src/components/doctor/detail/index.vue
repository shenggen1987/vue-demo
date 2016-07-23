<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="javascript:;"></a>
      <!-- <a class="mui-action-back mui-icon mui-icon-right-nav mui-pull-right" href="javascript:;" @click="J_share">
      	<span class="mui-icon iconfont icon-fenxiang"></span>
      </a> -->
      <a id="info" class="mui-icon iconfont icon-fenxiang d-share mui-pull-right" href="javascript:;" @click="J_share"></a>
      <h1 class="mui-title">问诊详情</h1>
    </header>
    <div class="mui-content">
      <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						7777777
						<p class="time">写于5月26日 10:23</p>
						<p class="content">孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰
						孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰
						孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰孩子三岁半刚上幼儿园第二个月就因为感冒咳嗽，起初是扁桃体发炎加咳嗽，过些天就有
						浓痰
						</p>
						<ul class="mui-table-view mui-grid-view">
					        <li class="mui-table-view-cell mui-media mui-col-xs-6">
				                <img class="mui-media-object" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
				            </li>
				             <li class="mui-table-view-cell mui-media mui-col-xs-6">
				                <img class="mui-media-object" src="http://www.dcloud.io/hellomui/images/shuijiao.jpg">
				            </li>
					        
					    </ul>
					</div>
				</a>
			</li>
			

		</ul>
		 <ul class="mui-table-view comment-list">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						白鲸医生
						<p class="time">写于5月26日 10:23</p>
						<p class="content">
							孩子不是哮喘，<br>
							是支气管炎，鼻炎，存在细菌感染。请去正规儿科就诊，在医生指导下进行治疗。
						</p>
					</div>
				</a>
			</li>
			
		</ul>

    </div>

	<!-- 分享 -->
	<share :show.sync="show"></share>

  </div>
</template>

<script>
	import share from '../../inc/share/index'
	export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {
            	show: false
            }
        },
        methods :{
            J_share (e) {//方法，定义路由跳转，注意这里必须使用this，不然报错
            	console.log(1111);
                 e.stopPropagation();
		      var that = this;
		      that.show = true;
		     
            }
        },
		components: {
			share
		}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
  .mui-content {
	.mui-table-view{
	  	&:first-child{
	  		margin-top: 0;
	  	}
	    .avatar{
	  		border-radius: 50%;
	  	}
	  	.time{
	  		font-size: 12px;
	  		color: #ccc;
	  	}
	  	.content{
	  		white-space: normal;
	  	}
	  }

	.mui-media-body{
		.mui-table-view{
			&:before{
				background-color: #fff;
			}
			&:after{
				background-color: #fff;
			}
		}
	}
	

  }
  .comment-list{
  	padding-bottom: 50px;
  }
  .d-share{
	 font-size: 20px;
   }
  



</style>
