<template>
  <div class="nav-bar-wrapper" v-if="data && data.length">
    <section class="item" v-for="item in data" :key="item.id">
      <img class="img" :src="item.imgUrl" alt="nav-img" />
      <span class="name">{{ item.name }}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar-wrapper {
  padding: 0.3rem 0.17rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 48%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.28rem;
    &:nth-of-type(3),
    &:nth-of-type(4) {
      margin-bottom: 0;
    }
    .img {
      width: 100%;
    }
    .name {
      color: #000;
      font-weight: 700;
      margin: 0.11rem 0 0.08rem;
      font-size: 0.14rem;
      text-align: center;
    }
  }
}
</style>
