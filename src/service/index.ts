//todo 写的就是数据请求
import request from '@/utils/request'
import {
  AxiosResponse
} from 'axios'
//todo 登录
interface LoginDataType {
  username: string,
  password: string
}
export const loginReq = (data:LoginDataType):Promise<AxiosResponse<any>> => {
  return request({
    url: 'login',
    method: 'POST',
    data,
  })
}