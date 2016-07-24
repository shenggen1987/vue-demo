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
	<layout-footer :name.sync="pagename"></layout-footer>	

  </div>
</template>

<script>
	export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {
            	pagename: 'record'
            }
        },
        methods :{
            gocommunityDetail () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({name:"communityDetail"});
            },
            godoctorIssue(){
            	this.$route.router.go({name:"doctorIssue"});
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
