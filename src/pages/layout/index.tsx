import "./index.scss";
import { notification, Menu } from "antd";
import type { MenuProps } from "antd";
import { getTime } from "@/utils/getTime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./logo";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (location.state?.from === "/login") {
      handleWelcome();
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
      <div className="layout_container">
        {/* 左侧菜单栏 */}
        <div className="layout_menu">
          <Logo />
          {/* 菜单内容 */}</div>
        {/* 顶部 haeder */}
        <div className="layout_tabbar"></div>
        {/* 右侧内容 */}
        <div className="layout_content"></div>
      </div>
    </>
  );
};

export default Layout;
