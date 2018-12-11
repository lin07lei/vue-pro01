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
      <div class="index-left-block latest-news">
        <h2>最新消息</h2>
        <ul>

        </ul>
      </div>
    </div>
    <div class="index-right">

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
      }
    }
  }
}
</script>

<style scoped>
  .index-wrap{
    height: 580px;
    width: auto;
    padding: 0 40px;
  }
  .index-left{
    width: 20%;
  }
  h3{
    background-color: #42b983;
    line-height: 36px;
    text-align: center;
  }
  .hr{
    border-bottom: 1px solid #ccc;
  }
  li{
    display: block;
    text-align: center;
    line-height: 32px;
  }
  .hot-tag{
    font-size: 6px;
    font-weight: bold;
    background-color: red;
    color: white;
  }
</style>
