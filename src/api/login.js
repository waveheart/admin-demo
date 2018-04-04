import request from '@/utils/request'

// 登陆请求
export function login(username, password) {
  console.log('login')
  console.log(username, password)
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

// 获取信息请求
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// 推出登陆请求
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
