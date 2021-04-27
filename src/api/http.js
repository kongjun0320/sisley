import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 100000 // request timeout
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
