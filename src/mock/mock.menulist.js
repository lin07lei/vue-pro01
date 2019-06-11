export const menuList = [
  {
    method: "getNewsList",
    data: {
      list: [
        {
          title: "数据统计",
          path: "/detail/count"
        },
        {
          title: "数据预测",
          path: "/detail/forecast"
        },
        {
          title: "流量分析",
          path: "/detail/analysis"
        }
      ]
    }
  },
  {
    method: "getProductsList",
    data: {
      list: {
        pc: {
          title: "学习兴趣",
          list: [
            {
              name: "web前端",
              url: "https://coding.imooc.com",
              hot: true
            },
            {
              name: "后端学习",
              url: "http://www.runoob.com"
            },
            {
              name: "知乎论坛",
              url: "https://www.zhihu.com"
            }
          ]
        },
        app: {
          title: "游玩类目",
          last: true,
          list: [
            {
              name: "马蜂窝",
              url: "http://www.mafengwo.cn",
              hot: true
            },
            {
              name: "youtube",
              url: "https://www.youtube.com"
            }
          ]
        }
      }
    }
  }
];
