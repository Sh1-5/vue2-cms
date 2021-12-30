import request from '@/network/request.js'

export function getUserList(data) {
  return request({
    url: '/users/list',
    method: 'post',
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}

export function deleteUser(data) {
  return request({
    url: '/users/' + data,
    method: 'delete'
  })
}
