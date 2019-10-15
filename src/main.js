import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
