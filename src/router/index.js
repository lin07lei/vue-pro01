import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// 创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  Routes
})

export default router
