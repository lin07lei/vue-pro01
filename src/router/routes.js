// js配置路由：定义路由

// 引入组件
import IndexPage from "../pages/index.vue";
import DetailPage from "../pages/detail.vue";
import DetailAnaPage from "../pages/detail/analysis";
import DetailCouPage from "../pages/detail/count";
import DetailForPage from "../pages/detail/forecast";
import DetailPubPage from "../pages/detail/publish";

const routes = [
  {
    path: "/",
    component: IndexPage
  },
  {
    path: '/detail',
    component: DetailPage,
    redirect: '/detail/analysis',
    children: [
      {
        path: '/analysis',
        name: 'analysis',
        component: DetailAnaPage
      },
      {
        path: 'count',
        name: 'count',
        component: DetailCouPage
      },
      {
        path: 'forecast',
        name: 'forecast',
        component: DetailForPage
      },
      {
        path: 'publish',
        name: 'publish',
        component: DetailPubPage
      }
    ]
  }
];

export default routes;
