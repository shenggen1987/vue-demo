<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">折叠面板</h1>
    </header>
    <hello></hello>
    <div class="mui-content">
        <div class="mui-content-padded">
            <button type="button" class="mui-btn mui-btn-primary mui-btn-block">Block button
            <br>fadsa
            </button>
            <button type="button" class="mui-btn mui-btn-success mui-btn-block">Block button</button>
       
        </div>
    </div>


  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
