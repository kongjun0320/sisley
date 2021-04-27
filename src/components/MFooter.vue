<template>
  <div class="m-footer-wrapper">
    <div class="section sisley-desc">
      <img class="logo" src="../assets/images/logo.svg" alt="" />
      <p class="desc">
        来自法国的高科技植物精粹品牌，100%官方正品保证。秉承安全，有效，愉悦的品牌精髓，为您臻选高端护肤、彩妆、香氛、护发产品。
      </p>
    </div>
    <section class="copy-right">
      <ul>
        <li>条款与条件</li>
        <li>法律声明</li>
        <li>法律声隐私条款明</li>
      </ul>
      <p class="copy-right-content">
        ©2020 sisley希思黎贸易有限公司 保留所有权利
      </p>
      <p class="address">沪ICP备09011489号-15</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MFooter'
}
</script>

<style lang="scss" scoped>
.m-footer-wrapper {
  padding-bottom: 0.1rem;
  .sisley-desc {
    background: #f3f3f3;
    text-align: center;
    padding: 0.5rem 0.17rem;
    .logo {
      width: 1.04rem;
      margin-bottom: 0.2rem;
    }
    .desc {
      color: #575757;
      font-size: 0.13rem;
      line-height: 0.22rem;
    }
  }
  .copy-right {
    margin-top: 0.3rem;
    padding: 0 0.2rem;
    background: #fff;
    color: #575757;
    font-size: 0.12rem;
    ul {
      li {
        font-size: 0.12rem;
        margin: 0.2rem 0;
      }
    }
    .copy-right-content {
      font-size: 0.12rem;
    }
    .address {
      font-size: 0.12rem;
    }
  }
}
</style>
