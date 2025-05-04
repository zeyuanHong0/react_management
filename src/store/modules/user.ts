import type { LoginFormData } from "@/api/user/type";
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
const avatar =
  "https://media.giphy.com/media/tpVKvAabWt3G5csMkT/giphy.gif?cid=ecf05e47gh5dlpncg2xoqjhdn09mcce1zl5jm5l4g28y043o&ep=v1_gifs_search&rid=giphy.gif&ct=g";
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
    async userLogin() {
      set({ token: "test_token" });
      SET_TOKEN("test_token");
      return "is login";
    },

    // 获取用户信息
    async getUserInfo() {
      set({
        userInfo: {
          name: "test",
          avatar,
        },
      });
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          name: "test",
          avatar,
        }),
      );
      return "获取用户信息成功";
    },

    // 退出登录
    async userLogout() {
      set({ token: null });
      REMOVE_TOKEN();
      localStorage.clear();
      return "退出登录成功";
    },
  };
};

export default userStore;
