import React from "react";
import type { FormProps } from "antd";
import { Form, Input, Button } from "antd";

import BackBtn from "./components/BackBtn";

type RegisterProps = {
  goBack: () => void;
};

type FieldType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC<RegisterProps> = ({ goBack }) => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">注册</div>
      <Form name="register" size="large" onFinish={onFinish}>
        <Form.Item<FieldType>
          name="username"
          rules={[
            {
              required: true,
              message: "请输入账号",
            },
          ]}
        >
          <Input placeholder="账号" />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[
            {
              required: true,
              message: "请输入正确的邮箱",
              pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            },
          ]}
        >
          <Input placeholder="邮箱" />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码",
            },
          ]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item<FieldType>
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "请输入确认密码",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="确认密码" />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" block>
            注册
          </Button>
        </Form.Item>
      </Form>
      <div className="mb-3 text-xs text-gray-500">
        注册即我同意
        <a href="./" className="mx-1 text-sm !text-[#00b8d9] !underline">
          服务条款
        </a>
        &
        <a href="./" className="mx-1 text-sm !text-[#00b8d9] !underline">
          隐私政策
        </a>
      </div>
      <BackBtn goBack={goBack} />
    </>
  );
};

export default RegisterForm;
