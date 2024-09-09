import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ReloadOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, notification } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

import useStore from "@/store";

const Tabbar = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const { isFold, setFold, userInfo, userLogout } = useStore();
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

  return (
    <>
      {contextHolder}
      <div className="w-full h-full flex justify-between items-center bg-[rgb(247, 245, 245)] pl-[10px] pr-[20px] box-border">
        <div className="cursor-pointer" onClick={() => setFold(!isFold)}>
          {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className="gap-4 flex cursor-pointer">
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
            <Avatar src={<img src={userInfo.avatar} alt="avatar" />} />
            <span>{userInfo.name}</span>
            <Dropdown menu={{ items }} placement="bottom">
              <DownOutlined />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabbar;
