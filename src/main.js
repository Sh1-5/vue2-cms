import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入 ECharts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
