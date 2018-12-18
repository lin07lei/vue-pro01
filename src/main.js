import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import Mockdata from "./mock/index"

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

new Vue({
  el: '#app',
  router,
  // render: h => h(Layout),
  template: '<layout/>',
  components: { Layout }
})
