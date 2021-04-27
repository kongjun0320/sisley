import { mock } from 'mockjs'
import { detail1, detail2, detail3 } from './data/detail'
import home from './data/home'
import { d1, d2 } from './data/search'

mock(RegExp('/home'), 'get', () => {
  return home
})

mock('/search', 'post', options => {
  const params = JSON.parse(options.body)
  console.log(params)
  if (params.keyWords.indexOf('面霜') !== -1) {
    return d1
  } else if (params.keyWords.indexOf('乳液') !== -1) {
    return d2
  } else {
    return { code: 0, msg: 'success', data: [] }
  }
})

mock(RegExp('/detail' + '.*'), 'post', options => {
  const params = JSON.parse(options.body)
  console.log(params)
  if (params.id === '13') {
    return detail1
  } else if (params.id === '16') {
    return detail2
  } else if (params.id === '3') {
    return detail3
  } else {
    return { code: 0, msg: 'success', data: [] }
  }
})

mock(RegExp('/signin'), 'post', options => {
  const params = JSON.parse(options.body)
  console.log(params)
  if (params.username === 'admin' && params.password) {
    return {
      code: 0,
      msg: 'success'
    }
  } else {
    return {
      code: -1,
      msg: 'error'
    }
  }
})
