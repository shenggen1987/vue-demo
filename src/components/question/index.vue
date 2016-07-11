<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">问题1/5</h1>
    </header>
    <div class="mui-content">
      <div class="remark"> <span class="mui-icon mui-icon-info"></span>
		请如实回答，这将有助于您与医生讨论哮喘病情
      </div>
      <div class="title">
        在过去的四周内，在工作、学习或家中，有多少时候哮喘妨碍您进行日常活动？
      </div>
        <div class="mui-content-padded">
            <button type="button" class="mui-btn mui-btn-block" @click="goscore">所有时间</button>
       		<button type="button" class="mui-btn mui-btn-block" @click="goscore">大多数时间</button>
       		<button type="button" class="mui-btn mui-btn-block" @click="goscore">有些时候</button>
       		<button type="button" class="mui-btn mui-btn-block" @click="goscore">很少时候</button>
       		<button type="button" class="mui-btn mui-btn-block" @click="goscore">没有</button>
        </div>
    </div>
  </div>
</template>

<script>
	export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {
            }
        },
        methods :{
            goscore () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$route.router.go({name:"score"});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' >
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
