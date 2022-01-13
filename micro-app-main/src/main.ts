import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import startQiankun from './micro/index'

Vue.config.productionTip = false
// 启动qiankun微前端
startQiankun()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
