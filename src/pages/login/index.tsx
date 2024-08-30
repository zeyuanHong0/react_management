import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import type { FormProps } from "antd";
import useStore from "@/store";
import { useEffect } from "react";
import { setSessionStorage } from "@/utils/storage";

type FieldType = {
  username: string;
  password: string;
};
const Login = () => {
  const { userLogin, getUserInfo } = useStore();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    handleLogin(values);
  };

  useEffect(() => {
    setSessionStorage("hasShownWelcome", "false");
  }, []);
  // 登录操作
  const handleLogin = async ({ username, password }: FieldType) => {
    try {
      const res: Promise<string> | string = await userLogin({
        username,
        password,
      });
      console.log("🚀 ~ handleLogin ~ res:", res);
      if (res === "is login") {
        handleGetUserInfo();
      }
    } catch (error) {
      message.error("账号或者密码错误");
    }
  };

  const navigator = useNavigate();

  // 获取用户信息
  const handleGetUserInfo = async () => {
    try {
      const res: Promise<string> | string = await getUserInfo();
      if (res === "获取用户信息成功") {
        // 前往首页 '/'
        navigator("/", { state: { from: "/login" } });
      }
    } catch (error) {
      message.error("获取用户信息失败");
    }
  };
  return (
    <>
      <div className="page">
        <div className="login-container">
          <h1>Hello</h1>
          <h2>欢迎来到哲理源甄选</h2>
          <Form validateTrigger={["onBlur"]} onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "请输入用户名" },
                {
                  min: 5,
                  message: "用户名长度至少为5个字符",
                },
              ]}
            >
              <Input size="large" placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "请输入密码" },
                {
                  min: 6,
                  message: "密码长度至少为6个字符",
                },
              ]}
            >
              <Input size="large" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
