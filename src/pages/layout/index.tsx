import "./index.scss";
import { notification } from "antd";
import { getTime } from "@/utils/getTime";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Color from "color";

import { useThemeToken } from "@/theme/hooks";

import Logo from "@/components/Logo";
import Nav from "./nav";
import Tabbar from "./tabbar";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const { colorPrimary, colorBorder } = useThemeToken();

  useEffect(() => {
    const hasShownWelcome = getSessionStorage("hasShownWelcome");
    if (location.state?.from === "/login" && hasShownWelcome !== "true") {
      handleWelcome();
      setSessionStorage("hasShownWelcome", "true");
    }
  }, [location]);
  const handleWelcome = () => {
    api.success({
      message: `Hi,${getTime()}好`,
      description: "欢迎回来",
      placement: "topRight",
    });
  };
  return (
    <>
      {contextHolder}
      <div className="layout_container w-full h-screen">
        {/* 左侧菜单栏 */}
        <div
          className="layout_menu w-base-menu-width h-screen bg-white text-white"
          style={{
            borderRight: `1px dashed ${Color(colorBorder)
              .alpha(0.6)
              .toString()}`,
          }}
        >
          <div className="flex items-center h-[60px] justify-center pt-[10px] box-border">
            <Logo />
            <span
              className="ml-2 text-xl font-bold"
              style={{ color: colorPrimary }}
            >
              Alexander Smith
            </span>
          </div>
          {/* 菜单内容 */}
          <Nav />
        </div>
        {/* 顶部 haeder */}
        <div className="layout_tabbar fixed top-[0] left-[260px] w-[calc(100%-260px)] h-[50px]">
          <Tabbar />
        </div>
        {/* 右侧内容 */}
        <div className="layout_content absolute top-[50px] left-[260px] w-[calc(100%-260px)] h-[calc(100vh-50px)] p-[20px] overflow-auto"></div>
      </div>
    </>
  );
};

export default Layout;
