import Vue from 'vue'
import router from './router'
import Layout from './components/layout'
// import Mockdata from "./mock/index"

new Vue({
  el: '#app',
  router,  // 将路由注入实例
  render: h => h(Layout)
})
