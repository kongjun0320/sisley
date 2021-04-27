<template>
  <div class="detail-wrapper" v-if="detailData">
    <van-swipe
      v-if="detailData.swiper && detailData.swiper.length"
      class="my-swipe"
      :autoplay="6000"
      indicator-color="white"
    >
      <van-swipe-item v-for="(imgUrl, index) in detailData.swiper" :key="index">
        <img :src="imgUrl" alt="img" />
      </van-swipe-item>
    </van-swipe>
    <section class="info">
      <p class="name">{{ detailData.info.name }}</p>
      <p class="eng-name">{{ detailData.info.engName }}</p>
      <p class="desc">{{ detailData.info.desc }}</p>
      <p class="opacity">容量：{{ detailData.info.opacity }}</p>
      <p class="price">￥{{ detailData.info.price }}</p>
    </section>
    <section class="btn-box">
      <section class="btn add-cart" @click="handleCart(1, detailData)">
        加入购物车
      </section>
      <section class="btn buy" @click="handleCart(2, detailData)">
        立即购买
      </section>
    </section>
    <section class="pics">
      <img
        v-for="(imgUrl, index) in detailData.others"
        :key="index"
        :src="imgUrl"
        alt=""
      />
    </section>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'Detail',
  data() {
    return {
      detailData: null
    }
  },
  mounted() {
    const id = this.$route.params.id
    this._getDetail(id)
  },
  methods: {
    _getDetail(id) {
      const params = { id }
      this.$http.getDetail(params).then(res => {
        const { code, data } = res
        if (code === 0) {
          this.detailData = data
        } else {
          this.detailData = null
        }
      })
    },
    handleCart(type, detailData) {
      // 加入购物车
      const cartProducts = [...this.$store.state.cartProducts]
      const currentProduct = cartProducts.find(c => c.id === detailData.info.id)
      if (currentProduct) {
        currentProduct.count++
      } else {
        cartProducts.push({ ...detailData.info, isChecked: true, count: 1 })
      }
      this.$store.commit('addCart', cartProducts)
      Notify({ type: 'success', message: '加入购物车成功' })
      if (type === 2) {
        // 立即购买
        this.$router.push('/cart')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-wrapper {
  padding: 0.1rem 0.2rem;
  .my-swipe {
    img {
      width: 100%;
    }
  }
  .info {
    margin: 0.4rem 0 0.2rem;
    .name {
      color: #000;
      font-size: 0.24rem;
      margin-bottom: 0.1rem;
    }
    .eng-name {
      color: #000;
      font-size: 0.16rem;
      margin-bottom: 0.1rem;
    }
    .desc {
      color: #282828;
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }
    .opacity {
      color: #282828;
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }
    .price {
      font-size: 0.12rem;
    }
  }
  .btn-box {
    padding: 0.2rem 0;
    .btn {
      height: 0.38rem;
      line-height: 0.38rem;
      font-size: 0.1rem;
      text-align: center;
      cursor: pointer;
      border-radius: 0.3rem;
      margin-bottom: 0.2rem;
    }
    .add-cart {
      font-size: 0.1rem;
      background: #000;
      color: #fff;
    }
    .buy {
      border: 1px solid #cacaca;
      color: #000;
    }
  }
  .pics {
    img {
      width: 100%;
    }
  }
}
</style>
