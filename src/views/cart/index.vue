<template>
  <div class="cart-wrapper">
    <section class="logo">
      <img
        @click="$router.push('/')"
        src="../../assets/images/logo.svg"
        class="logo-img"
        alt=""
      />
    </section>
    <section class="continue-buy">
      <img @click="$router.go(-1)" src="../../assets/images/back.svg" alt="" />
      <span @click="$router.go(-1)">继续购买</span>
    </section>
    <section class="cart-product-list">
      <section class="all">
        <img
          v-if="allChecked"
          @click="handleCheckAll(false)"
          src="../../assets/images/check.svg"
          alt=""
        />
        <img
          v-else
          @click="handleCheckAll(true)"
          src="../../assets/images/no-check.svg"
          alt=""
        />
        <span>{{ allCheckName }}</span>
      </section>
      <section class="list-box">
        <section
          v-for="(v, index) in $store.state.cartProducts"
          :key="v.id"
          class="item"
        >
          <img
            class="remove"
            src="../../assets/images/close.svg"
            alt=""
            @click="removeCartProducts(index)"
          />
          <section class="check-radio">
            <img
              @click="handleCheck(v)"
              v-if="v.isChecked"
              src="../../assets/images/check.svg"
              alt=""
            />
            <img
              @click="handleCheck(v)"
              v-else
              src="../../assets/images/no-check.svg"
              alt=""
            />
          </section>
          <img class="product-img" :src="v.imgUrl" alt="" />
          <section class="info">
            <p class="name">{{ v.name }}</p>
            <p class="opacity">
              <span>容量：</span>
              <span>{{ v.opacity }}ml</span>
            </p>
            <p class="price">￥{{ v.price }}</p>
            <section class="count">
              <span>数量：</span>
              <span>{{ v.count }}</span>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="order">
      <h3 class="title">订单摘要</h3>
      <section class="info">
        <section class="item">
          <span>商品金额</span>
          <span>￥{{ $store.getters.allMoney }}</span>
        </section>
        <section class="item">
          <span>优惠金额</span>
          <span>￥0</span>
        </section>
        <section class="item">
          <span>运费</span>
          <span>免费</span>
        </section>
        <section class="item">
          <span>包装</span>
          <span>免费</span>
        </section>
      </section>
      <section class="all-money">
        <span class="name">总计</span>
        <span class="price">￥{{ $store.getters.allMoney }}</span>
      </section>
      <section class="submit-order">
        提交订单
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      allCheckName: '全选',
      allChecked: true
    }
  },
  methods: {
    handleCheckAll(flag) {
      this.allChecked = flag
      this.allCheckName = flag ? '全不选' : '全选'
      this.$store.state.cartProducts.forEach(c => (c.isChecked = flag))
    },
    handleCheck(v) {
      v.isChecked = !v.isChecked
      const noAllCheck = this.$store.state.cartProducts.some(v => !v.isChecked)
      if (noAllCheck) {
        this.allChecked = false
        this.allCheckName = '全选'
      } else {
        this.allChecked = true
        this.allCheckName = '全不选'
      }
    },
    removeCartProducts(index) {
      const tempCartProducts = [...this.$store.state.cartProducts]
      tempCartProducts.splice(index, 1)
      this.$store.commit('addCart', tempCartProducts)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-wrapper {
  padding: 0.3rem 0.16rem;
  .logo {
    text-align: center;
    .logo-img {
      width: 2rem;
    }
  }
  .continue-buy {
    position: relative;
    padding-left: 0.17rem;
    & > img {
      width: 0.12rem;
      height: 0.12rem;
      position: absolute;
      top: 58%;
      transform: translateY(-50%);
      left: 0;
    }
    & > span {
      font-size: 0.12rem;
      color: #666;
      border-bottom: 1px solid #666;
    }
  }
  .cart-product-list {
    .all {
      margin: 0.3rem 0;
      position: relative;
      padding-left: 0.2rem;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 0.16rem;
      }
      span {
        font-size: 0.16rem;
        color: #333;
      }
    }
    .list-box {
      margin: 0.1rem 0;
      .item {
        padding: 0.5rem 0;
        display: flex;
        position: relative;
        .remove {
          position: absolute;
          top: 0;
          right: 0.05rem;
          width: 0.38rem;
        }
        .check-radio {
          width: 0.3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.16rem;
          }
        }
        .product-img {
          width: 1.06rem;
        }
        .info {
          padding: 0.1rem;
          flex: 1;
          .name {
            font-size: 0.16rem;
            color: #000;
          }
          .price {
            color: #000;
            font-size: 0.13rem;
          }
          .opacity {
            font-size: 0.13rem;
            color: #575757;
            margin: 0.1rem 0;
          }
          .count {
            color: #000;
            font-size: 0.13rem;
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
  .order {
    .title {
      font-size: 0.14rem;
      font-weight: 700;
      color: #000;
      margin-bottom: 0.2rem;
    }
    .info {
      .item {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 0.12rem;
          color: #5e5e5e;
          margin-bottom: 0.12rem;
        }
      }
    }
    .all-money {
      display: flex;
      justify-content: space-between;
      font-size: 0.16rem;
      color: #282828;
      margin: 0.2rem 0;
    }
    .submit-order {
      border-radius: 0.2rem;
      padding: 0.13rem;
      text-align: center;
      color: #fff;
      font-size: 0.12rem;
      background: #000;
    }
  }
}
</style>
