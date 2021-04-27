<template>
  <div class="signin-wrapper">
    <section class="input-box username">
      <input
        v-model="username"
        class="input"
        placeholder="用户名"
        type="text"
      />
    </section>
    <section class="input-box password">
      <input
        v-model="password"
        class="input"
        placeholder="密码"
        type="password"
      />
    </section>
    <section class="submit">
      <button class="btn" @click="signin">登录</button>
    </section>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'Signin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signin() {
      const { username, password } = this
      if (!username || !password) {
        Notify({ type: 'warning', message: '用户名或者密码不能为空' })
        return
      }
      const params = { username, password }
      this.$http.signin(params).then(res => {
        console.log(res)
        if (res.code === 0) {
          Notify({ type: 'success', message: '登录成功 ', duration: 1000 })
          this.$router.push('/')
        } else {
          Notify({ type: 'danger', message: '用户名或者密码错误' })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.signin-wrapper {
  .input-box {
    margin-top: 0.3rem;
    .input {
      width: 100%;
      height: 0.47rem;
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
  .submit {
    text-align: center;
    margin-top: 0.3rem;
    .btn {
      display: inline-block;
      padding: 0.1rem 0.2rem;
      background: #000;
      font-size: 0.1rem;
      color: #fff;
      border-radius: 0.3rem;
      opacity: 0.65;
    }
  }
}
</style>
