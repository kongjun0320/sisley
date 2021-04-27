import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'

import './assets/css/reset.css'
import './assets/css/commom.scss'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

import * as req from './api/index'

process.env.NODE_ENV === 'mock' && require('./mock')

Vue.config.productionTip = false
Vue.prototype.$http = req
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
