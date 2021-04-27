<template>
  <div class="show-wrapper" v-if="data && data.length">
    <section
      class="common-item"
      :class="generateCls(index)"
      v-for="(item, index) in data"
      :key="item.id"
    >
      <img class="img" :src="item.imgUrl" alt="recommend" />
      <p class="title">{{ item.name }}</p>
      <p class="desc">{{ item.desc }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Show',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      clsObj: {
        0: 'item-cover',
        1: 'item-right',
        2: 'item-left',
        3: 'item-center'
      }
    }
  },
  methods: {
    generateCls(index) {
      return this.clsObj[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.show-wrapper {
  padding-top: 0.3rem;
  .title {
    font-size: 0.16rem;
    margin-top: 0.2rem;
    color: #000;
  }
  .desc {
    color: #575757;
    font-size: 0.13rem;
    margin-top: 0.07rem;
  }
  .common-item {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
    .img {
      width: 100%;
    }
  }
  .item-right {
    text-align: right;
    .img {
      width: 70%;
    }
  }
  .item-left {
    text-align: left;

    .img {
      width: 70%;
    }
  }
  .item-center {
    text-align: center;
    .img {
      width: 60%;
    }
  }
}
</style>
