import http from './http'

export const getHome = data => {
  return http({
    url: '/home',
    method: 'get',
    params: data
  })
}

export const getSearch = data => {
  return http({
    url: '/search',
    method: 'post',
    data
  })
}

export const getDetail = data => {
  return http({
    url: '/detail',
    method: 'post',
    data
  })
}

export const signin = data => {
  return http({
    url: '/signin',
    method: 'post',
    data
  })
}
