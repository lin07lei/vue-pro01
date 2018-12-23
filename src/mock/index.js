import Mock from 'mockjs'

Mock.mock(/getNewsList/, {
  'list': [
      {
        title: '数据统计',
        url: 'https://coding.imooc.com'
      },
      {
        title: '数据预测',
        url: 'http://www.runoob.com'
      },
      {
        title: '流量分析',
        url: 'https://www.zhihu.com'
      }
  ]
}),

Mock.mock(/getBoardList/, {
  'list': [
      {
        title: '产品第一',
        description: '这是一段很长的简单介绍产品的描述文字blablabla……',
        id: 'one',
        img: require('../assets/imgs/one.png'),
        url: 'https://coding.imooc.com'
      },
      {
        title: '产品第二',
        description: '这是一段很长的简单介绍产品的描述文字blablabla……',
        id: 'two',
        img: require('../assets/imgs/two.png'),
        url: 'http://www.runoob.com'
      },
      {
        title: '产品第三',
        description: '这是一段很长的简单介绍产品的描述文字blablabla……',
        id: 'three',
        img: require('../assets/imgs/three.png'),
        url: 'https://www.zhihu.com'
      },
      {
        title: '产品第四',
        description: '这是一段很长的简单介绍产品的描述文字blablabla……',
        id: 'four',
        img: require('../assets/imgs/four.png'),
        url: 'https://www.baidu.com'
      }
  ]
}),

Mock.mock(/getProductsList/, {
  'list': {
    pc: {
      title: '学习兴趣',
      list: [
        {
          name: 'web前端',
          url: 'https://coding.imooc.com',
          hot: true
        },
        {
          name: '后端学习',
          url: 'http://www.runoob.com'
        },
        {
          name: '知乎论坛',
          url: 'https://www.zhihu.com'
        }
      ]
    },
    app: {
      title: '游玩类目',
      last: true,
      list: [
        {
          name: '马蜂窝',
          url: 'http://www.mafengwo.cn',
          hot: true
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com'
        }
      ]
    }
  }
}),

Mock.mock(/getSlideImages/, {
  'list': [
      {
        src: require('../assets/imgs/a.png'),
        title: '邓伦欧巴',
        href: ''
      },
      {
        src: require('../assets/imgs/b.png'),
        title: '刘雯欧尼',
        href: ''
      },
      {
        src: require('../assets/imgs/c.png'),
        title: 'bueaty',
        href: ''
      },
      {
        src: require('../assets/imgs/d.png'),
        title: '林三岁',
        href: ''
      }
  ]
})
