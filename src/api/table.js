import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

// 筛选信息请求
export function getFilteredInfo(fiter_params) {
  console.log({ ...fiter_params })
  return request({
    url: '/table/filter_info',
    method: 'post',
    params: {
      ...fiter_params
    }
  })
}
