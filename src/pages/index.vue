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
      <div class="index-slide" v-if="imgArray.length !== 0">
        <slide-show
        :slides="imgArray"
        :inv="slideSpeed">
        </slide-show>
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
import axios from 'axios'
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  data () {
    return {
      productsList: {},
      newsList: '',
      boardList: '',
      imgArray: [],
      slideSpeed: 2000
    }
  },

  mounted() {
    axios.post('api/getNewsList', {num: 5})
    .then((res) => {
      console.log(res)
      this.newsList = res.data.list
    })
    .catch((err) => {
      console.log(err)
    }),

    axios.get('api/getBoardList')
    .then((res) => {
      console.log(res)
      this.boardList = res.data.list
    })
    .catch((err) => {
      console.log(err);
    }),

    axios.get('api/getProductsList')
    .then((res) => {
      console.log(res);
      this.productsList = res.data.list
    })
    .catch((err) => {
      console.log(err);
    }),

    axios.get('api/getSlideImages')
    .then((res) => {
      this.imgArray = res.data.list
      console.log(this.imgArray);
    })
    .catch((err) => {
      console.log(err)
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  .index-wrap{
    height: 580px;
    width: 100%;
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
  .index-slide{
    margin-top: 15px;
    width: 91%;
    height: 300px;
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
  .index-board-list{
    margin-top: 28px;
  }

</style>
