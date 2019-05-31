import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { errorFormatter } from './config/utils'
import Element from 'element-ui'
Vue.use(Element)


Vue.prototype.$errorFormatter = errorFormatter

Vue.config.productionTip = false
let isFirstVisit = true
router.beforeEach(async (to, from, next) => {
  if (isFirstVisit) {
    isFirstVisit = false
    next()
  }
  next()
})
// 解决重新构建后异步加载的页面报错
router.onError((error: Error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    location.reload()
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
