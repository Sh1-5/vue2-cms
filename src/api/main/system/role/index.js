import request from '@/network/request.js'

export function getRoleList(data) {
  return request({
    url: '/role/list',
    method: 'post',
    data: {
      offset: data.offset,
      size: data.size
    }
  })
}
