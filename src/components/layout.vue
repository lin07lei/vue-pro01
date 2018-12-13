<template>
  <div>
    <div class="app-head">
      <div class="app-header-inner">
        <img src="../assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登陆</li>
            <li class="list-pile">|</li>
            <li>注册</li>
            <li class="list-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>@author yanglei, muke first vue practice Demo! Started at 2018-12-1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-color: #eee;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.app-head {
  background-color: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-header-inner {
  width: 1300px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-header-inner img {
  width: 50px;
  margin-top: 20px;
  /* float: left; */
}
.head-nav {
  margin-top: -120px;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  float: right;
  cursor: pointer;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  background-color: #EEEEEE;
  color: #b2b2b2;
  height: 60px;
  line-height: 60px;
  width: 100%;
}
</style>
