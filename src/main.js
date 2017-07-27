import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'
Vue.config.productionTip = false

// 解决300毫秒延迟
fastclick.attach(document.body)

Vue.use(VueLazyload,{
	loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
