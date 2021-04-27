<template>
  <div class="account-wrapper">
    <section class="close-box">
      <img
        @click="$router.push('/')"
        class="logo"
        src="../../assets/images/logo.svg"
        alt=""
      />
    </section>
    <section class="sign-in-up">
      <span>登录</span>
    </section>
    <signin />
    <signup />
  </div>
</template>

<script>
import Signin from '../../components/Signin.vue'
import Signup from '../../components/Signup.vue'
export default {
  components: { Signin, Signup },
  name: 'Account'
}
</script>

<style lang="scss" scoped>
.account-wrapper {
  padding: 0.37rem 0.16rem;
  .close-box {
    text-align: center;
    height: 0.5rem;
    .logo {
      width: 2rem;
    }
  }
  .sign-in-up {
    text-align: center;
    margin-top: 0.3rem;
    font-size: 0.2rem;
    color: #282828;
  }
}
</style>
