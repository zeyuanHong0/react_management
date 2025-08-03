import { useState } from "react";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ReloadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, notification, Drawer } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

import useSettingStore from "@/store/settingStore.ts";
import useStore from "@/store";

import BreadCrumb from "./bread-crumb";
import { IconButton, SvgIcon } from "@/components/Icon";
import Menu from "../menu";

const Tabbar = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { userInfo, userLogout } = useStore();
  const { isFold, setFold } = useSettingStore();
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      const res: Promise<string> | string = await userLogout();
      if (res === "退出登录成功") {
        // 跳转到登录页
        navigate("/login", { replace: true });
      }
    } catch (error: any) {
      api.warning({
        message: `退出登录失败:${error.message}`,
        description: "请重试",
        placement: "topRight",
      });
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="text-center" onClick={handleLogout}>
          退出登录
        </div>
      ),
    },
  ];

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setFullScreen(!fullScreen);
  };
  const Icon = fullScreen ? FullscreenExitOutlined : FullscreenOutlined;

  const [openDrawer, setDrawerOpen] = useState(false);
  return (
    <>
      {contextHolder}
      <div className="bg-[rgb(247, 245, 245)] box-border flex h-full w-full items-center justify-between px-3 md:pl-[30px] md:pr-[40px]">
        <div className="ml-6 hidden md:block">
          <BreadCrumb />
        </div>
        <IconButton
          className="h-10 w-10 md:hidden"
          onClick={() => setDrawerOpen(true)}
        >
          <SvgIcon icon="ic-menu" size="24" />
        </IconButton>
        <div className="flex cursor-pointer gap-4">
          {/* 刷新 */}
          <Button
            type="dashed"
            shape="circle"
            icon={<ReloadOutlined />}
            onClick={() => window.location.reload()}
          />
          {/* 全屏 */}
          <Button type="dashed" icon={<Icon />} onClick={handleFullScreen} />
          {/* 头像 */}
          <div className="flex items-center gap-1">
            <Avatar
              src={
                <img
                  src={
                    "https://media.giphy.com/media/DyQrKMpqkAhNHZ1iWe/giphy.gif?cid=82a1493b9thyjlcpxscciyl4qco3k4x6pr9l4m4d8xuucpmb&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
                  }
                  alt="avatar"
                />
              }
            />
            <span>{userInfo.name}</span>
            <Dropdown menu={{ items }} placement="bottom">
              <DownOutlined />
            </Dropdown>
          </div>
        </div>
      </div>
      {/* 左侧抽屉 */}
      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={openDrawer}
        closeIcon={false}
        styles={{
          header: {
            display: "none",
          },
          body: {
            padding: 0,
            overflow: "hidden",
          },
        }}
        width="auto"
      >
        <Menu showFoldBtn={false} />
      </Drawer>
    </>
  );
};

export default Tabbar;
