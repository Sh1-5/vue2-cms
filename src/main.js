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
import chinaMapData from './assets/data/china.json'
Vue.prototype.$echarts.registerMap('china', chinaMapData)

// 引入 normalize.css
import 'normalize.css'

// 自定义 css
import './assets/css/index.css'

// 将缓存中的信息放到 store 中
import { setupStore } from './store'
setupStore()

import { globalRegister } from './global'
Vue.use(globalRegister)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
