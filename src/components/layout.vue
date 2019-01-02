<template>
  <div>
    <div class="app-head">
      <div class="app-header-inner">
        <img src="../assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li @click="logClick">登陆</li>
            <li class="list-pile">|</li>
            <li @click="regClick">注册</li>
            <li class="list-pile">|</li>
            <li @click="aboutClick">关于</li>
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
    <my-dialog
    :is-show="isShowAbout"
    @on-close="closeDialog(isShowAbout)">
      <p>About</p>
    </my-dialog>
    <my-dialog
    :is-show="isShowLog"
    @on-close="closeDialog(isShowLog)">
      <p>About</p>
    </my-dialog>
    <my-dialog
    :is-show="isShowReg"
    @on-close="closeDialog(isShowReg)">
      <p>About</p>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './dialog'
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowAbout: false,
      isShowLog: false,
      isShowReg: false
    }
  },
  components: {
    myDialog: Dialog
  },
  methods: {
    aboutClick() {
      this.isShowAbout = true
    },
    logClick() {
      this.isShowLog = true
    },
    regClick() {
      this.isShowReg = true
    },
    closeDialog(attr) {
      console.log(333);
      this[attr] = false
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
  height: 30px;
  line-height: 30px;
  width: 100%;
  bottom: 0;
}
</style>
