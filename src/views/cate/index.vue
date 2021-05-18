<template>
  <div class="cate-wrapper">
    <section class="left-cate">
      <span
        @click="toggleCate(i)"
        class="cate-item"
        :class="{ active: currentIndex === i }"
        v-for="(cate, i) in cates"
        :key="i"
        >{{ cate.cate }}</span
      >
    </section>
    <section class="right-product">
      <section
        class="product-item"
        v-for="(prod, i) in cates[currentIndex].products"
        :key="i"
      >
        <img :key="pIndex" class="img" :src="prod.imgUrl" alt="" />
        <span :key="pIndex" class="name">{{ prod.name }}</span>
      </section>
    </section>
  </div>
</template>

<script>
import { cates } from '../../mock/data/cate'
export default {
  name: 'Cate',
  data() {
    return {
      cates: cates,
      currentIndex: 0
    }
  },
  methods: {
    toggleCate(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.cate-wrapper {
  display: flex;
  .left-cate {
    width: 1.02rem;
    min-height: calc(100vh - 0.63rem);
    height: 100%;
    background-color: rgb(249, 249, 249);
    display: flex;
    flex-direction: column;
    .cate-item {
      height: 0.5rem;
      line-height: 0.5rem;
      padding: 0 0.1rem;
      color: rgb(51, 51, 51);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.14rem;
      &.active {
        color: rgb(255, 80, 0);
        background-color: rgb(255, 255, 255);
        border-left: 0.02rem solid rgb(255, 80, 0);
      }
    }
  }
  .right-product {
    flex: 1;
    height: 0.92rem;
    padding: 0.16rem;
    display: flex;
    flex-wrap: wrap;
    .product-item {
      width: 0.67rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-bottom: 0.15rem;
      margin: 0 0.15rem 0.15rem 0;
      .img {
        width: 0.67rem;
        height: 0.67rem;
        margin-bottom: 0.1rem;
      }
      .name {
        width: 0.6rem;
        font-size: 0.12rem;
        line-height: 0.15rem;
        color: rgb(102, 102, 102);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }
  }
}
</style>
