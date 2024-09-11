import "./index.scss";
import { notification } from "antd";
import { getTime } from "@/utils/getTime";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";
import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Color from "color";
import classNames from "classnames";

import { useThemeToken } from "@/theme/hooks";
import useStore from "@/store";

import Logo from "@/components/Logo";
import Nav from "./nav";
import Tabbar from "./tabbar";
import MultiTabs from "./tabs";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const { colorPrimary, colorBorder } = useThemeToken();
  const { isFold } = useStore();

  useEffect(() => {
    const hasShownWelcome = getSessionStorage("hasShownWelcome");
    if (location.state?.from === "/login" && hasShownWelcome !== "true") {
      handleWelcome();
      setSessionStorage("hasShownWelcome", "true");
    }
  }, [location.state?.from]);
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
            "h-full",
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
            "absolute",
            "top-[50px]",
            "h-[calc(100vh-50px)]",
            {
              "left-[260px]": !isFold,
              "w-[calc(100%-260px)]": !isFold,
              "w-[calc(100%-81px)]": isFold,
              "left-[81px]": isFold,
            }
          )}
        >
          {/* tabs */}
          <div
            className="w-full h-[40px]"
            style={{
              borderBottom: `1px dashed ${Color(colorBorder)
                .alpha(0.6)
                .toString()}`,
            }}
          >
            <MultiTabs />
          </div>
          <div className="layout_content w-full h-[calc(100vh-90px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
