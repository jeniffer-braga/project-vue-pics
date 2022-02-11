import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import msg from './pt_BR'
import VueResource from 'vue-resource';  
import VueRouter from 'vue-router';
import { routes } from './routes'; 

import 'bootstrap/dist/css/bootstrap.css'; 
import './assets/css/teste.css'; 

Vue.use(VueResource); 
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter); 

const router = new VueRouter({
  routes: routes,
  mode: 'history'
}); 

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
}); 

new Vue({
  el: '#app',
  router: router, 
  render: h => h(App)
})
