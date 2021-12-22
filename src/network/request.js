const axios = require('axios')

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(
  (config) => {
    // const token = useUserStore().getToken
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截
request.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res.data.data
    }
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
