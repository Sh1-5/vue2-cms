import request from '@/network/request.js'

export function getGoodsList(data) {
  return request({
    url: '/goods/list',
    method: 'post',
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
