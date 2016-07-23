import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import tools from './util/tools';
Vue.use( VueRouter );

var App = Vue.extend({});
let isHybrid = tools.isHybrid();
Vue.component('layout-footer', require("./util/ui/layout/footer.vue"));	
var router = new VueRouter({
  // abstract : isHybrid,	//Hybrid环境使用 abstract 模拟路由
  hashbang : isHybrid,	//Hybrid环境使用 abstract 模拟路由
  history : !isHybrid	//浏览器环境使用 history api
});

Routes( router );
router.start(App, '#main');
