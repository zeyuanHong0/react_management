import { fetchLogin, fetchUserInfo, fetchLogout } from "@/api/user/index";
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponsedata,
} from "@/api/user/type";
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";

export type UserInfo = {
  name: string;
  avatar: string;
};

export type UserState = {
  token: string | null;
  userInfo: UserInfo;
  userLogin: (data: LoginFormData) => Promise<string>;
  getUserInfo: () => Promise<string>;
  userLogout: () => Promise<string>;
};
const userStore = (set: any): UserState => {
  return {
    token: GET_TOKEN(),
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo") as string)
      : {
          name: "",
          avatar: "",
        },
    // 登录
    async userLogin(data: LoginFormData) {
      try {
        const res: LoginResponseData = await fetchLogin(data);
        console.log("🚀 ~ userLogin ~ res:", res);
        if (res.code === 200) {
          set({ token: res.data as string });
          SET_TOKEN(res.data as string);
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
          set({ userInfo: res.data });
          localStorage.setItem("userInfo", JSON.stringify(res.data));
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
