import request from '@/network/request.js'

export function getRoleList(data) {
  return request({
    url: '/role/list',
    method: 'post',
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}

export function deleteRole(data) {
  return request({
    url: '/role/' + data,
    method: 'delete'
  })
}
