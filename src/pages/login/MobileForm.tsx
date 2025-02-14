import { Form, Input, Button, Row, Col, Statistic } from "antd";
import { useState } from "react";

import BackBtn from "./components/BackBtn";

const MobileForm = () => {
  const { Countdown } = Statistic;
  const [countdown, setCountdown] = useState(0);
  const [second, setSecond] = useState(0);

  const start = () => {
    setCountdown(60);
    setSecond(60);
  };
  const reset = () => {
    setCountdown(0);
    setSecond(60);
  };
  const goBack = () => {};
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">手机登录</div>
      <Form
        size="large"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item name="phone">
          <Input placeholder="手机号码" />
        </Form.Item>
        <Form.Item name="code">
          <Row justify="space-between">
            <Col span={14}>
              <Input placeholder="验证码" />
            </Col>
            <Col span={9}>
              <Button
                disabled={countdown !== 0}
                className="w-full !text-sm"
                onClick={start}
              >
                {countdown === 0 ? (
                  "获取验证码"
                ) : (
                  <div>
                    <Countdown
                      className="hidden"
                      value={Date.now() + countdown * 1000}
                      onChange={(time) => {
                        setCountdown(Number(time) / 1000);
                        setSecond(Math.floor(Number(time) / 1000));
                      }}
                      format="ss"
                      onFinish={reset}
                    />
                    <span className="ml-1">{second}秒后重新获取</span>
                  </div>
                )}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            登录
          </Button>
        </Form.Item>
      </Form>
      <BackBtn />
    </>
  );
};

export default MobileForm;
