<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部兴趣</h2>
        <template v-for="product in productsList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block latest-news" style="height: 240px;">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-slice">

      </div>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :class="{'last-line' : index % 2 === 0}">
          <img :src="item.img"/>
          <div class="index-board-item-inner">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <a :href="item.url" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productsList: {
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
      },
      newsList: [
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
      ],
      boardList: [
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
    }
  }
}
</script>

<style scoped>
  .index-wrap{
    height: 580px;
    width: auto;
    padding: 0 40px;
    display: flex;
  }
  .index-left{
    width: 20%;
  }
  .index-right{
    width: 70%;
    margin-left: 60px;
  }
  h2{
    background-color: #1AE694;
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
  }
  h3{
    text-align: center;
    font-size: 16px;
  }
  .hr{
    border-bottom: 1px solid #ccc;
  }
  li{
    display: block;
    text-align: center;
    line-height: 32px;
  }
  a{
    text-decoration: none;
  }
  .hot-tag{
    font-size: 6px;
    font-weight: bold;
    background-color: red;
    color: white;
  }
  .index-left-block{
    background-color: #FFFFFF;
  }
  /* .index-left-block latest-news{
    height: 400px;
  } */
  .index-board-item{
    display: flex;
    width: 400px;
    background-color: #fff;
    padding: 0px 10px 10px 10px;
    margin: 15px auto;
    float:left;
    line-height: 17px;
  }
  .last-line{
    margin-right: 15px;
  }
  .button{
    padding: 5px 10px;
    background-color: #1AE694;
    color: #fff;
  }
  .index-board-item img{
    margin: 18px 20px 0px 10px;
    height: 120px;
    width: 150px;
  }

</style>
