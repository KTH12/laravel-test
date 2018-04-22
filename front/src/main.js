import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Auth from './packages/auth/Auth.js'

Vue.use(VueAxios, axios)
Vue.use(Auth)

Router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.forVisitors)) {
      if(Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else next();
    }
    
    else if(record => record.meta.forAuth) {
      console.log(Vue.auth.isAuthenticated());
      if( ! Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next();
    } 
    
    else next();
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
