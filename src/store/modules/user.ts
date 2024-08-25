import { fetchLogin, fetchUserInfo, fetchLogout } from "@/api/user/index";
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponsedata,
} from "@/api/user/type";
import { GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
const userStore = (set: any) => {
  return {
    token: GET_TOKEN(),
    username: "", // 用户名
    avatar: "", // 头像
    // 登录
    async userLogin(data: LoginFormData) {
      try {
        const res: LoginResponseData = await fetchLogin(data);
        if (res.code === 200) {
          set({ token: res.data as string });
          return "is login";
        } else {
          return Promise.reject(res.message);
        }
      } catch (error: any) {
        return Promise.reject(error);
      }
    },

    // 获取用户信息
    async getUserInfo() {
      try {
        const res: UserInfoResponsedata = await fetchUserInfo();
        if (res.code === 200) {
          set({ username: res.data.name, avatar: res.data.avatar });
          return "获取用户信息成功";
        } else {
          return Promise.reject(new Error(res.message));
        }
      } catch (error: any) {
        return Promise.reject(error);
      }
    },

    // 退出登录
    async userLogout() {
      try {
        const res: any = await fetchLogout();
        if (res.code === 200) {
          REMOVE_TOKEN();
          set({ token: "", username: "", avatar: "" });
          return "退出登录成功";
        } else {
          return Promise.reject(new Error(res.message));
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
};

export default userStore;
