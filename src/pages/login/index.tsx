import { useEffect, useState } from "react";
import { Layout } from "antd";
import Color from "color";

import LoginImg from "@/assets/images/bg_login.png";
import Overlay2 from "@/assets/images/overlay_2.jpg";
import { setSessionStorage } from "@/utils/storage";
import { useThemeToken } from "@/theme/hooks";

import LoginForm from "./LoginForm";
import MobileForm from "./MobileForm";

const Login = () => {
  // 获取主题
  const { colorBgElevated } = useThemeToken();
  useEffect(() => {
    setSessionStorage("hasShownWelcome", "false");
  }, []);

  const gradientBg = Color(colorBgElevated).alpha(0.9).toString();
  const bg = `linear-gradient(${gradientBg}, ${gradientBg}) center center / cover no-repeat,url(${Overlay2})`;

  const [formType, setFormType] = useState("login");

  const showForm = () => {
    switch (formType) {
      case "login":
        return <LoginForm changeLoginWay={(way: string) => setFormType(way)} />;
      case "mobile":
        return <MobileForm goBack={() => setFormType("login")} />;
      default:
        return <LoginForm changeLoginWay={(way: string) => setFormType(way)} />;
    }
  };
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
          {showForm()}
        </div>
      </Layout>
    </>
  );
};

export default Login;
