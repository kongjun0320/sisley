import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [
      {
        id: 1,
        name: '希思黎特润抗皱修活御致臻颜霜',
        opacity: 50,
        count: 1,
        price: 700,
        isChecked: true,
        imgUrl:
          'https://assets.sisley.com.cn/upload/materials/pdp/headimgs/150050_01.jpg?x-oss-process=image/resize,w_900/quality,q_95'
      }
    ]
  },
  getters: {
    allMoney(state) {
      return state.cartProducts.reduce(
        (pre, cur) => (cur.isChecked ? pre + cur.price * cur.count : pre + 0),
        0
      )
    }
  },
  mutations: {
    addCart(state, payload) {
      state.cartProducts = payload
    }
  },
  actions: {},
  modules: {}
})
