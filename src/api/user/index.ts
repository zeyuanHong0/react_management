import request from '@/utils/axios'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponsedata,
} from './type'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

// 登录接口
export const fetchLogin = (data: LoginFormData) => {
  return request.post<any, LoginResponseData>(API.LOGIN_URL, data)
}

// 获取用户信息
export const fetchUserInfo = () => {
  return request.get<any, UserInfoResponsedata>(API.USERINFO_URL)
}

// 退出登录
export const fetchLogout = () => {
  return request.post<any, any>(API.LOGOUT_URL)
}
