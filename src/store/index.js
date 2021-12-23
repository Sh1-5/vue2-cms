import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loginModule from './login'

const store = new Vuex.Store({
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export default store
