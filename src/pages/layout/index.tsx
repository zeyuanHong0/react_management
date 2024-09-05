import "./index.scss";
import { notification } from "antd";
import { getTime } from "@/utils/getTime";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Color from "color";
import classNames from "classnames";

import { useThemeToken } from "@/theme/hooks";
import useStore from "@/store";

import Logo from "@/components/Logo";
import Nav from "./nav";
import Tabbar from "./tabbar";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const { colorPrimary, colorBorder } = useThemeToken();
  const { isFold } = useStore();
  console.log("🚀 ~ Layout ~ isFold:", isFold);

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
          className={classNames(
            "layout_menu",
            "h-screen",
            "bg-white",
            "text-white",
            {
              "w-base-menu-width": !isFold,
              "w-base-menu-min-width": isFold,
            }
          )}
          style={{
            borderRight: `1px dashed ${Color(colorBorder)
              .alpha(0.6)
              .toString()}`,
          }}
        >
          <div className="flex items-center h-[60px] justify-center pt-[10px] box-border">
            <Logo />
            {!isFold && (
              <span
                className="ml-2 text-xl font-bold"
                style={{ color: colorPrimary }}
              >
                Alexander Smith
              </span>
            )}
          </div>
          {/* 菜单内容 */}
          <Nav />
        </div>
        {/* 顶部 haeder */}
        <div
          className={classNames(
            "layout_tabbar",
            "fixed",
            "top-[0]",
            "h-[50px]",
            {
              "left-[260px]": !isFold,
              "left-[81px]": isFold,
              "w-[calc(100%-260px)]": !isFold,
              "w-[calc(100%-81px)]": isFold,
            }
          )}
        >
          <Tabbar />
        </div>
        {/* 右侧内容 */}
        <div
          className={classNames(
            "layout_content",
            "absolute",
            "top-[50px]",
            "p-[20px]",
            "overflow-auto",
            "h-[calc(100vh-50px)]",
            {
              "left-[260px]": !isFold,
              "w-[calc(100%-260px)]": !isFold,
              "w-[calc(100%-81px)]": isFold,
              "left-[81px]": isFold,
            }
          )}
        ></div>
      </div>
    </>
  );
};

export default Layout;
