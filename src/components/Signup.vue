<template>
  <div class="signup-wrapper">
    <p class="title">创建用户</p>
    <p class="desc">通过手机号码创建账户，您将成为Sisley法国希思黎会员。</p>
    <section class="input-box">
      <input class="input" placeholder="手机号码" />
    </section>
    <section class="btn">
      <span @click="handleMenber">成为会员</span>
    </section>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'Signup',
  methods: {
    handleMenber() {
      Notify({ type: 'warning', message: '功能开发中... ', duration: 1000 })
    }
  }
}
</script>

<style lang="scss" scoped>
.signup-wrapper {
  margin-top: 0.3rem;
  .title {
    color: #000;
    font-weight: 700;
    font-size: 0.12rem;
  }
  .desc {
    font-size: 0.13rem;
    color: #575757;
    margin: 0.1rem 0;
  }
  .input-box {
    margin-top: 0.3rem;
    .input {
      width: 100%;
      height: 0.45rem;
      border-radius: 0.3rem;
      font-size: 0.16rem;
      padding: 0.14rem 0.1rem 0.13rem 0.2rem;
      background: #fff;
      border: 0.01rem solid #cacaca;
      color: #575757;
      &::placeholder {
        color: #cacaca;
        font-size: 0.12rem;
      }
    }
  }
  .btn {
    margin-top: 0.2rem;
    text-align: right;
    span {
      display: inline-block;
      padding: 0.13rem 0.3rem;
      background: #000;
      font-size: 0.1rem;
      color: #fff;
      border-radius: 0.3rem;
      opacity: 0.65;
    }
  }
}
</style>
