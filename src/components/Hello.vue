<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">哮喘评估</h1>
    </header>
    <div class="mui-content">
      <h3 class="title1">选择您的年龄段</h3>
      <div class="title">
        ACT/C-ACT是国际权威认定的评估哮喘控制水平的测试，帮您了解哮喘控制水平，早日控制哮喘
      </div>
        <div class="mui-content-padded">
            <button type="button" class="mui-btn mui-btn-primary mui-btn-block">
            12岁以上
            <br>ACT哮喘控制测试
            </button>
            <button type="button" class="mui-btn mui-btn-success mui-btn-block">
              4-12岁
              <br>
              C-ACT儿童哮喘控制测试
            </button>
       
        </div>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    margin: 20px 15px 20px;
    color: #6d6d72;
    font-size: 15px;
  }
  .title1{
    margin: 40px 0;
    text-align: center;
  }
</style>
