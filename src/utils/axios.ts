import axios from "axios";
import { message } from "antd";
import { useUserStore } from "@/store/modules/user";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    // 判断是否存在token，如果存在的话，则每个请求都带上token
    if (userStore.token) {
      config.headers.token = userStore.token;
    }
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 处理网络错误
    // http状态码
    if (error.response && error.response.status) {
      const statusMap: { [key: number]: string } = {
        401: "token过期",
        403: "无权访问",
        404: "请求地址错误",
        500: "服务器错误",
      };
      message.error(statusMap[error.response.status] || "网络错误");
      return Promise.reject(error);
    }
  }
);

export default request;
