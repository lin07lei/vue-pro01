<template>
  <div @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-show">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <div class="slide-bottom">
      <h3>{{ slides[nowIndex].title }}</h3>
      <ul class="slides-pages">
        <li @click="goto(preIndex)">&lt;</li>
        <li v-for="(item, index) in slides" @click="goto(index)">
          <a :class="{on: index === nowIndex}">{{index + 1}}</a>
        </li>
        <li @click="goto(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "slideShow",
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    preIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  mounted() {
    this.runInv();
  },
  methods: {
    // 幻灯片跳到哪一页
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    // 幻灯片自动切换
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    // 清除循环播放
    clearInv() {
      clearInterval(this.invId);
    }
  }
};
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translatex(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translatex(-900px);
}
.slide-show {
  margin-top: 15px;
  position: relative;
  width: 100%;
  height: 320px;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  text-align: left;
  overflow: hidden;
}
.slide-show img {
  width: 100%;
  height: 100%;
}
.slide-bottom {
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background: #000;
  opacity: 0.5;
}
.slide-bottom h3 {
  display: block;
  line-height: 16px;
  margin-top: 4px;
  padding-left: 8px;
  margin-bottom: 4px;
}

.slides-pages {
  margin-right: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
}
.on {
  text-decoration: underline;
  font-weight: bold;
}
</style>
