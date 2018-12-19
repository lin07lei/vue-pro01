<template>
  <div class="slide-show">
    <div class="slide-images">
      <a :href="slides[nowIndex].href">
        <img :src="slides[nowIndex].src">
      </a>
    </div>
    <h3>{{slides[nowIndex.title]}}</h3>
    <ul class="slides-pages">
      <li>&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a>{{index + 1}}</a>
      </li>
      <li>&gt;</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'slideShow',
  props: {
    slides: {
      type: Array,
      default:  () => []
    }
  },
  data() {
    return {
      nowIndex: 0
    }
  },

  mounted() {
    console.log(this.slides)
  },
  methods: {
    goto(index) {
      this.nowIndex = index;
    }
  }
}
</script>

<style scoped>
.slide-trans-enter-active{
  transition: all .5s;
}
.slide-trans-enter{
  transform: translatex(900px);
}
.slide-trans-old-leave-active{
  transition: all .5s;
  transform: translatex(-900px);
}
.slide-show{
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  text-align: left;
  padding-left: 15px;
}

</style>
