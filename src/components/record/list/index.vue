<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" href="javascript:;"></a>
      <h1 class="mui-title">记录</h1>
    </header>
    <div class="mui-content">
      <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;" @click="gocommunityDetail">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						<p class="content">记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;" @click="gocommunityDetail">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						<p class="content">记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录</p>
					</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;" @click="gocommunityDetail">
					<img class="mui-media-object mui-pull-left avatar" src="http://test.3dker.cn/statics/image/defaulthead.png">
					<div class="mui-media-body">
						<p class="content">记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录记录</p>
					</div>
				</a>
			</li>
		</ul>
    </div>
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
            godoctorIssue(){
            	this.$route.router.go({name:"doctorIssue"});
            },
            routerGo(name){
            	this.$route.router.go({name: name});
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
