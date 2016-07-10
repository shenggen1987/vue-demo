export default function ( router ){
  router.map({
    '/' : {
      name : 'home',
      component : function ( resolve ){
        require(['./components/Hello.vue'], resolve)
      }
    },
    '/index' : {
      name : 'index',
      component : function ( resolve ){
        require(['./components/index/index.vue'], resolve)
      }
    },
    '/question' : {
      name : 'question',
      component : function ( resolve ){
        require(['./components/question/index.vue'], resolve)
      }
    },
    '/score' : {
      name : 'score',
      component : function ( resolve ){
        require(['./components/score/index.vue'], resolve)
      }
    },
    '/community' : {
      name : 'community',
      component : function ( resolve ){
        require(['./components/community/list/index.vue'], resolve)
      }
    }

  });

  router.beforeEach(function ({ to, next }){
    next();
  });

  router.afterEach(function ( trans ){
  });
}
