import Vue from 'vue'
import router from './router'
import Layout from './components/layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "./mock"

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,  // 将路由注入实例
  render: h => h(Layout)
})
