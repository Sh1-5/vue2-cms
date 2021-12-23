import localCache from '@/utils/cache'
import router from '@/router'

import { accountLogin, getUserInfoById, getUserMenusById } from '@/api/login'

export default {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    userMenus: []
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction(context, payload) {
      // 1.登录
      const loginResult = await accountLogin(payload)
      const { token, id } = loginResult
      context.commit('changeToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfo = await getUserInfoById(id)
      context.commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.获取菜单
      const userMenus = await getUserMenusById(userInfo.role.id)
      context.commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },
    // 有缓存则将缓存中的信息放到 store 中
    loadLocalLogin(context) {
      const token = localCache.getCache('token')
      if (token) {
        context.commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        context.commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        context.commit('changeUserMenus', userMenus)
      }
    }
  }
}
