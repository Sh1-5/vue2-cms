import request from '@/network/request.js'

export function getUserList(data) {
  return request({
    url: '/users/list',
    method: 'post',
    data: {
      offset: data.offset,
      size: data.size
    }
  })
}
