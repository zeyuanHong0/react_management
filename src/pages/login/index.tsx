import "./index.scss";
import { Card, Form, Input, Button, message } from "antd";
const Login = () => {
  const onFinish = () => {};
  return (
    <div className="page">
      <div className="login-container">
        <h1>Hello</h1>
        <h2>欢迎来到哲理源甄选</h2>
        <Form validateTrigger={["onBlur"]} onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "请输入手机号" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不对",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input size="large" placeholder="请输入密码" maxLength={6} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
