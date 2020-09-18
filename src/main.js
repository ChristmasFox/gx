import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import './assets/global.css'
import Element, { Message } from 'element-ui'


Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
