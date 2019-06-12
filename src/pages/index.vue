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
            <router-link :to="{ path: item.path }">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-slide" v-if="imgArray.length !== 0">
        <slide-show :slides="imgArray" :inv="slideSpeed"></slide-show>
      </div>
      <div class="index-board-list">
        <el-row :gutter="12">
          <el-col :md="12" v-for="(item, index) in boardList">
            <div class="index-board-item">
              <img :src="item.img">
              <div class="index-board-item-inner">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <div class="index-board-button">
                  <a :href="item.url" class="button">立即购买</a>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import slideShow from "../components/slideShow";
export default {
  components: {
    slideShow
  },
  data() {
    return {
      productsList: {},
      newsList: [],
      boardList: [],
      imgArray: [],
      slideSpeed: 2000
    };
  },

  mounted() {
    axios
      .post("getNewsList", { num: 5 })
      .then(res => {
        this.newsList = res.data.list;
        console.log(this.newsList);
      })
      .catch(err => {
        console.log(err);
      }),
      axios
        .post("getBoardList")
        .then(res => {
          this.boardList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        }),
      axios
        .post("getProductsList")
        .then(res => {
          this.productsList = res.data.list;
        })
        .catch(err => {
          console.log(err);
        }),
      axios
        .post("getSlideImages")
        .then(res => {
          this.imgArray = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
  },
  methods: {
    // handleclick() {
    //   console.log("0000000000");
    //   this.$router.push({ path: "/detail" });
    // }
  }
};
</script>

<style scoped>
.index-wrap {
  /* height: 580px; */
  width: 100%;
  display: flex;
}
.index-left {
  width: 40%;
}
.index-right {
  margin-left: 20px;
}
h2 {
  background-color: #1ae694;
  color: #fff;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
}
h3 {
  text-align: center;
  font-size: 16px;
}
.hr {
  border-bottom: 1px solid #ccc;
}
li {
  display: block;
  text-align: center;
  line-height: 32px;
}
a {
  text-decoration: none;
}
.hot-tag {
  font-size: 6px;
  font-weight: bold;
  background-color: red;
  color: white;
}
.index-left-block {
  background-color: #ffffff;
}
/* .index-left-block latest-news{
    height: 400px;
  } */
.index-board-item {
  display: flex;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  margin: 8px auto;
  float: left;
  line-height: 17px;
}
.button {
  padding: 5px 10px;
  background-color: #1ae694;
  color: #fff;
}
.index-board-item img {
  margin: 18px 20px 0px 10px;
  height: 120px;
  width: 150px;
}
.index-board-list {
  overflow: hidden;
  margin-top: 8px;
}
</style>
