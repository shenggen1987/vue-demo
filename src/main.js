import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes';
Vue.use( VueRouter );

var App = Vue.extend({});

var router = new VueRouter({
  history : true
});

Routes( router );
router.start(App, '#main');
