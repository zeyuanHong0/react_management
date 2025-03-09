import { useEffect, useState } from "react";
import { Layout } from "antd";
import Color from "color";

import LoginImg from "@/assets/images/bg_login.png";
import Overlay2 from "@/assets/images/overlay_2.jpg";
import { setSessionStorage } from "@/utils/storage";
import { useThemeToken } from "@/theme/hooks";

import LoginForm from "./LoginForm";
import MobileForm from "./MobileForm";
import QRCodeForm from "./QRCodeForm";

type LoginProps = {
  changeLoginWay: (way: string) => void;
  goBack: () => void;
};
// 表单组件映射
const FORM_COMPONENTS = {
  login: (props: LoginProps) => <LoginForm {...props} />,
  mobile: (props: LoginProps) => <MobileForm {...props} />,
  QRCode: (props: LoginProps) => <QRCodeForm {...props} />,
};

const Login = () => {
  // 获取主题
  const { colorBgElevated } = useThemeToken();
  useEffect(() => {
    setSessionStorage("hasShownWelcome", "false");
  }, []);

  const gradientBg = Color(colorBgElevated).alpha(0.9).toString();
  const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`;

  const [formType, setFormType] = useState("login");

  // 渲染表单组件
  const renderForm = () => {
    const formProps = {
      changeLoginWay: (way: string) => setFormType(way),
      goBack: () => setFormType("login"),
    };

    const FormComponent = FORM_COMPONENTS[formType] || FORM_COMPONENTS.login;
    return FormComponent(formProps);
  };

  return (
    <>
      <Layout className="relative flex !min-h-screen !w-full !flex-row">
        <div
          className="hidden grow flex-col items-center justify-center gap-[80px] bg-center bg-no-repeat md:flex"
          style={{
            background: bg,
          }}
        >
          <div className="text-3xl font-bold leading-normal lg:text-4xl xl:text-5xl">
            Alexander Smith
          </div>
          <img
            className="max-w-[480px] xl:max-w-[560px]"
            src={LoginImg}
            alt=""
          />
        </div>

        <div className="m-auto flex !h-screen w-full max-w-[480px] flex-col justify-center px-[16px] lg:px-[64px]">
          {renderForm()}
        </div>
      </Layout>
    </>
  );
};

export default Login;
