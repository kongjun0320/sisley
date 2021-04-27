<template>
  <div class="home-wrapper">
    <van-swipe class="my-swipe" :autoplay="6000" indicator-color="white">
      <van-swipe-item
        @click="swiperClick(sItem)"
        v-for="sItem in swiper"
        :key="sItem.id"
      >
        <img :src="sItem.imgUrl" alt="img" />
      </van-swipe-item>
    </van-swipe>
    <line-hori />
    <nav-bar :data="nav" />
    <line-hori />
    <show :data="recommend" />
    <m-footer />
  </div>
</template>

<script>
import LineHori from '../../components/LineHori.vue'
import NavBar from './NavBar.vue'
import Show from './Show.vue'
import MFooter from '../../components/MFooter.vue'
import { Notify } from 'vant'
export default {
  components: { LineHori, NavBar, Show, MFooter },
  name: 'Home',
  data() {
    return {
      swiper: [],
      nav: [],
      recommend: []
    }
  },
  mounted() {
    this._getHome()
  },
  methods: {
    swiperClick(sItem) {
      if (sItem.id !== 3) {
        Notify({ type: 'warning', message: '暂无数据' })
      } else {
        this.$router.push(`/detail/${sItem.id}`)
      }
    },
    _getHome() {
      this.$http.getHome().then(res => {
        const { code, data } = res
        if (code === 0) {
          this.swiper = data.swiper
          this.nav = data.nav
          this.recommend = data.recommend
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  .my-swipe {
    height: 0;
    overflow: hidden;
    padding-bottom: 156%;
    img {
      width: 100%;
    }
  }
}
</style>
