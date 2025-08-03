import "./index.scss";
import React, { useEffect, useState } from "react";
import { notification } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import styled from "styled-components";

import { setSessionStorage, getSessionStorage } from "@/utils/storage";
import useSettingStore from "@/store/settingStore.ts";
import { getTime } from "@/utils/getTime";

import Menu from "./menu";
import Tabbar from "./tabbar";
import MultiTabs from "./tabs";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const { isFold } = useSettingStore();
  // console.log("🚀 ~ Layout ~ useSettingStore():", useSettingStore());

  useEffect(() => {
    const hasShownWelcome = getSessionStorage("hasShownWelcome") || "false";
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
  // 判断是否隐藏左侧菜单栏,小于768px时隐藏
  const [isShowLayoutMenu, setIsShowLayoutMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsShowLayoutMenu(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {contextHolder}
      <div className="layout_container h-screen w-full">
        {/* 左侧菜单栏 */}
        {isShowLayoutMenu && <Menu />}
        {/* 顶部 haeder */}
        <div
          className={classNames(
            "layout_tabbar",
            "fixed",
            "top-[0]",
            "h-[70px]",
            {
              "left-[260px]": !isFold,
              "left-[81px]": isFold,
              "w-[calc(100%-260px)]": !isFold,
              "w-[calc(100%-81px)]": isFold,
              "!left-0": !isShowLayoutMenu,
              "!w-full": !isShowLayoutMenu,
            },
          )}
        >
          <Tabbar />
        </div>
        {/* 右侧内容 */}
        <div
          className={classNames(
            "absolute",
            "top-[70px]",
            "h-[calc(100vh-70px)]",
            {
              "left-[260px]": !isFold,
              "w-[calc(100%-260px)]": !isFold,
              "w-[calc(100%-81px)]": isFold,
              "left-[81px]": isFold,
              "!left-0": !isShowLayoutMenu,
              "!w-full": !isShowLayoutMenu,
            },
          )}
        >
          {/* tabs */}
          <Tabcontainer>
            <MultiTabs />
          </Tabcontainer>
          <div className="layout_content h-[calc(100vh-112px)] w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const Tabcontainer = styled.div`
  height: 32px;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  border-bottom: 1px dashed rgba(217, 217, 217, 0.6);
`;

export default Layout;
