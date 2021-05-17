<template>
  <section class="tab-wrapper">
    <section class="logo">
      <img
        @click="$router.push('/')"
        src="../../assets/images/logo.svg"
        alt=""
      />
    </section>
    <section class="handle-btn">
      <section class="handle-btn-item navbar-search">
        <img
          @click="$router.push('/search')"
          src="../../assets/images/search.svg"
          alt=""
        />
      </section>
      <section class="handle-btn-item navbar-account">
        <img
          @click="$router.push('/account')"
          src="../../assets/images/account.svg"
          alt=""
        />
      </section>
      <section class="handle-btn-item navbar-minicart">
        <img
          @click="$router.push('/cart')"
          src="../../assets/images/cart.svg"
          alt=""
        />
      </section>
      <section class="handle-btn-item navbar-toggler">
        <img
          @click="$router.push('/chart')"
          src="../../assets/images/chart.svg"
          alt=""
        />
      </section>
      <section class="handle-btn-item navbar-toggler">
        <img
          @click="$router.push('/cate')"
          src="../../assets/images/cate.svg"
          alt=""
        />
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style lang="scss" scoped>
.tab-wrapper {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 0.63rem;
  background: #fff;
  padding: 0 0.17rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    & > img {
      width: 0.81rem;
    }
  }
  .handle-btn {
    display: flex;
    .handle-btn-item {
      width: 0.23rem;
      margin-left: 0.17rem;
      & > img {
        width: 100%;
      }
    }
  }
}
</style>
