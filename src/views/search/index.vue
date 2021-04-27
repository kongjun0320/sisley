<template>
  <div class="search-wrapper">
    <section class="search-box">
      <van-search
        v-model="keyWords"
        placeholder="请输入搜索关键词"
        input-align="center"
        @input="handleSearch"
      />
    </section>
    <section class="search-list" v-if="searchData && searchData.length">
      <p class="count">
        相关商品（7）
      </p>
      <section class="list">
        <section class="item" v-for="sItem in searchData" :key="sItem.id">
          <img
            class="img"
            @click="$router.push(`/detail/${sItem.id}`)"
            :src="sItem.imgUrl"
            alt=""
          />
          <p class="name ellipsis">{{ sItem.name }}</p>
          <p class="desc ellipsis">{{ sItem.desc }}</p>
          <section class="price-buy" @click="buy">
            <p class="price">￥{{ sItem.price }}</p>
            <span class="btn-buy" @click="handleBuy(sItem)">立即购买</span>
          </section>
        </section>
      </section>
    </section>
    <section class="scroll-box" v-else>
      <section class="history-search">
        <section class="title">
          <span class="name">历史搜索</span>
          <img class="del-img" src="../../assets/images/delete.svg" alt="" />
        </section>
        <section class="list common-list">
          <span class="item" @click="searchByHistory('S面霜')">S面霜</span>
          <span class="item" @click="searchByHistory('乳液')">乳液</span>
        </section>
      </section>
      <section class="hot-search">
        <section class="title">
          <span class="name">热门搜索</span>
        </section>
        <section class="list common-list">
          <span class="item">S面霜</span>
          <span class="item">抗皱修活御致臻颜霜</span>
          <span class="item">全能乳液</span>
          <span class="item">黑玫瑰焕采精华霜</span>
          <span class="item">花香润肤水</span>
          <span class="item">抗皱修活御致眼唇霜</span>
          <span class="item">日间呵护精华乳</span>
          <span class="item">黑玫瑰珍宠滋养精华油</span>
          <span class="item">致臻夜间修护眼部精华露</span>
          <span class="item">轻柔粉底液</span>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'Search',
  data() {
    return {
      keyWords: '',
      searchData: []
    }
  },
  methods: {
    searchByHistory(historyWord) {
      this.keyWords = historyWord
      this._getSearchData()
    },
    handleBuy(v) {
      console.log(v)
      const cartProducts = [...this.$store.state.cartProducts]
      const currentProduct = cartProducts.find(c => c.id === v.id)
      if (currentProduct) {
        currentProduct.count++
      } else {
        cartProducts.push({ ...v, isChecked: true, count: 1 })
      }
      this.$store.commit('addCart', cartProducts)
      this.$router.push('/cart')
    },
    handleSearch() {
      if (this.keyWords) {
        this._getSearchData()
      } else {
        this.searchData = []
      }
    },
    _getSearchData() {
      const params = { keyWords: this.keyWords }
      this.$http.getSearch(params).then(res => {
        console.log(res)
        const { code, data } = res
        if (code === 0 && data.length) {
          this.searchData = data
        } else {
          Notify({ type: 'warning', message: '暂无数据' })
        }
      })
    },
    buy() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  .search-box {
    height: 0.4rem;
  }
  .scroll-box {
    height: calc(100vh - 0.4rem - 0.63rem);
    overflow: auto;
  }
  .search-list {
    padding: 0.2rem;
    .count {
      font-size: 0.14rem;
      padding: 0.1rem 0;
      color: #6d6d6d;
      border-bottom: 1px solid #ccc;
    }
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 47%;
        margin-top: 0.2rem;
        .img {
          width: 100%;
        }
        .name {
          color: #000;
          font-size: 0.12rem;
          margin-top: 0.03rem;
        }
        .desc {
          color: #575757;
          font-size: 0.12rem;
          margin: 0.07rem 0 0.2rem;
        }
        .price-buy {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.12rem;
          margin-top: 0.2rem;
          .price {
            color: #000;
            font-weight: 700;
            font-size: 0.12rem;
          }
          .btn-buy {
            font-size: 0.1rem;
            color: #fff;
            background: #000;
            padding: 0.05rem 0.1rem;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
  .title {
    position: relative;
    margin: 0.3rem 0 0.1rem;
    .name {
      color: #000;
      font-size: 0.14rem;
    }
    .del-img {
      width: 0.16rem;
      position: absolute;
      top: 0;
      right: 0.2rem;
    }
  }
  .common-list {
    display: flex;
    flex-wrap: wrap;
    .item {
      background: #f5f5f5;
      color: #575757;
      border-radius: 0.2rem;
      font-size: 0.13rem;
      padding: 0.1rem 0.2rem;
      margin: 0.1rem 0.1rem 0.1rem 0;
    }
  }
  .history-search {
    padding: 0 0.2rem;
  }
  .hot-search {
    padding: 0 0.2rem;
  }
}
</style>
