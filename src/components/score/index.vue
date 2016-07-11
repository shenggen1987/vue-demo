<template>
  <div id="app">
    
    <div class="mui-content">
      <div class="top">
      	<div class="info">
      		<h4 class="scoretitle">您的得分</h4>
			<h1 class="score">15</h1>
			<h4 class="control">未控制</h4>
			<h5>总分：27分</h5>
      	</div>
		
      </div>
      <div class="bottom">
      	<h4 class="scoretitle">未达目标</h4>
        <div class="title">
	        在过去的四周内，在工作、学习或家中，有多少时候哮喘妨碍您进行日常活动？
	    </div>
      </div>
        
    </div>
    <nav class="mui-bar mui-bar-tab score-sub">
		<button type="button" class="mui-btn mui-btn-success mui-btn-block" @click="gocommunity">提交</button>
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
            gocommunity () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({name:"community"});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
body,html,#main,#app,.mui-content{
height:100%;
}
  .top{
    height: 50%;
    background-color: #f0ad4e;
    position: relative;
    h3,h1,h5,h4{
    	color: #fff;
    	text-align: center;
    }
    .info{
		position: absolute;
		bottom: 20px;
		width: 100%;
    }
    .score{
    	font-size: 30px;
    	font-size: 100px;
    	font-weight: 400;
    }
    .control{
    	padding: 5px 0 10px;
    }
    .scoretitle{
    	padding-bottom: 10px;
    }
  }
  .bottom{
  	background-color: #efeff4;
  	.scoretitle{
  		margin-top: 20px;
  		text-align: center;
  	}
  	.title{
	    margin: 20px 15px 20px;
	    color: #ccc;
	    font-size: 15px;
	}
  }

  .score-sub{
  	background-color: #4cd964;
  }
 

 
</style>
