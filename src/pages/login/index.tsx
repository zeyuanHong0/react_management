import { useEffect } from "react";
import { Layout, theme } from "antd";
import Color from "color";

import LoginImg from "@/assets/images/bg_login.png";
import Overlay2 from "@/assets/images/overlay_2.jpg";
import { setSessionStorage } from "@/utils/storage";

import LoginForm from "./LoginForm";

const Login = () => {
  // 获取主题
  const { token: themeToken } = theme.useToken();
  useEffect(() => {
    setSessionStorage("hasShownWelcome", "false");
  }, []);

  const gradientBg = Color(themeToken.colorBgElevated).alpha(0.9).toString();
  const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`;
  return (
    <>
      <Layout className="relative flex !min-h-screen !w-full !flex-row">
        <div
          className="hidden grow flex-col items-center justify-center gap-[80px] bg-center  bg-no-repeat md:flex"
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
          <LoginForm />
        </div>
      </Layout>
    </>
  );
};

export default Login;
