import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message, Alert } from "antd";
import type { FormProps } from "antd";

import ProTag from "./components/Tag";
import useStore from "@/store";
import { useThemeToken } from "@/theme/hooks";

const LoginForm = () => {
  const navigator = useNavigate();
  type FieldType = {
    username: string;
    password: string;
  };
  const { userLogin, getUserInfo } = useStore();
  // 获取主题
  const { colorInfoTextHover } = useThemeToken();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
    handleLogin(values);
  };

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
      <div className="mb-4 text-2xl font-bold xl:text-3xl">登录</div>
      <Form
        validateTrigger={["onBlur"]}
        initialValues={{
          remember: true,
          username: "admin",
          password: "111111",
        }}
        onFinish={onFinish}
      >
        <div className="mb-4 flex flex-col">
          <Alert
            type="info"
            description={
              <div className="flex flex-col">
                <div className="flex">
                  <ProTag className="flex-shrink-0">Admin 账号</ProTag>
                  <strong
                    className="ml-1"
                    style={{ color: colorInfoTextHover }}
                  >
                    <span>admin</span>
                  </strong>
                </div>

                <div>
                  <ProTag className="flex-shrink-0">密码</ProTag>
                  <strong
                    className=" ml-1"
                    style={{ color: colorInfoTextHover }}
                  >
                    111111
                  </strong>
                </div>
              </div>
            }
            showIcon
          />
        </div>
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
          <Input.Password
            type="password"
            size="large"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
