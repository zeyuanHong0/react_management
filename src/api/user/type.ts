// 登录接口参数类型
export interface LoginFormData {
  username: string
  password: string
}

// 定义全部接口都有的返回的数据类型
interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 登录接口返回数据类型
export interface LoginResponseData extends ResponseData {
  data: string
}

// 获取用户信息接口返回数据类型
export interface UserInfoResponsedata extends ResponseData {
  data: UserInfo
}

interface UserInfo {
  avatar: string
  name: string
  roles: string[]
  buttons: string[]
  routes: string[]
}
