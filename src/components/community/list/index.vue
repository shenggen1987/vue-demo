<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a id="info" class="J-issue mui-pull-right" href="javascript:;" @click="gocommunityIssue">新回复</a>
      <h1 class="mui-title">患友社区</h1>
    </header>
    <div class="mui-content">
      <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;" @click="gocommunityDetail">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						李白
						<p class="time">写于5月26日 10:23</p>
						<p class="content">这个储物柜用了两个多月了，感觉吸药的效果比以前的直接对嘴吸要好多了</p>
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
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						木屋
						<p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						CBD
						<p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
					</div>
				</a>
			</li>

		</ul>
    </div>
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active" v-link="{ name: 'home' }">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
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
		<a class="mui-tab-item" href="#tabbar-with-map">
			<span class="mui-icon iconfont icon-03-0023"></span>
			<span class="mui-tab-label">药房</span>
		</a>
	</nav>

  </div>
</template>

<script>
	export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {
            }
        },
        methods :{
            gocommunityDetail () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({name:"communityDetail"});
            },
            gocommunityIssue(){
            	this.$route.router.go({name:"communityIssue"});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
  .J-issue{
	line-height: 44px;
  }
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
  .mui-bar-tab{
  	.mui-tab-item{
  		.icon-03-0023{
		  	top: 7px;
		  	font-size: 19px;
		  }
  	}
  } 
  


  .remark{
  	margin: 10px 15px 0;
  	font-size: 13px;
  	color: #ccc;
  	line-height: 24px;
	.mui-icon-info{
	  color: #0062cc;
	}
  }
  .title{
    margin: 20px 15px 20px;
    color: #6d6d72;
    font-size: 15px;
  }
  .title1{
    margin: 10px 0;
  }


</style>
