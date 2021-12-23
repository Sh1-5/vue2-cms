import request from '@/network/request.js'

// 登录
export function accountLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      name: data.username,
      password: data.password
    }
  })
}

// 获取用户信息
export function getUserInfoById(id) {
  return request({
    url: '/users/' + id,
    method: 'get'
  })
}

// 获取用户菜单
export function getUserMenusById(id) {
  return request({
    url: '/role/' + id + '/menu',
    method: 'get'
  })
}
