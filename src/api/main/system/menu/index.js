import request from '@/network/request.js'

export function getMenuList(data) {
  return request({
    url: '/menu/list',
    method: 'post',
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
