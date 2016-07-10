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
	<footer class="mui-bar mui-bar-nav">
      <button type="button" class="mui-btn mui-btn-success mui-btn-block">提交</button>
    </footer>

  </div>
</template>

<script>

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

  .mui-bar{
  	background-color: #4cd964;
  }
  .mui-bar-nav{
  	top: auto;
  	bottom: 0;
  }

 
</style>
