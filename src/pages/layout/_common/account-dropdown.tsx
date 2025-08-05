import React from "react";
import { Dropdown, Divider } from "antd";
import type { MenuProps } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useThemeToken } from "@/theme/hooks";
import useStore from "@/store";

import { IconButton } from "@/components/Icon";

const AccountDropdown = () => {
  const { userLogout } = useStore();
  const navigate = useNavigate();
  const avatar =
    "https://media.giphy.com/media/DyQrKMpqkAhNHZ1iWe/giphy.gif?cid=82a1493b9thyjlcpxscciyl4qco3k4x6pr9l4m4d8xuucpmb&ep=v1_gifs_trending&rid=giphy.gif&ct=g";

  const { colorBgElevated, borderRadiusLG, boxShadowSecondary } =
    useThemeToken();

  const contentStyle: React.CSSProperties = {
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };

  const dropdownRender = (menu: React.ReactNode) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div>Alexander Smith</div>
        <div className="text-gray">alexander.smith@example.com</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {menu}
    </div>
  );

  const handleLogout = () => {
    const res: string = userLogout();
    if (res === "退出登录成功") {
      // 回到登录页
      navigate("/login");
    }
  };

  const items: MenuProps["items"] = [
    {
      label: <NavLink to="dashboard/workbench">仪表盘</NavLink>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <LogoutBtn>退出登录</LogoutBtn>,
      key: "2",
      onClick: handleLogout,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      dropdownRender={dropdownRender}
    >
      <IconButton className="h-10 w-10 transform-none px-0 hover:scale-105">
        <img className="h-8 w-8 rounded-full" src={avatar} alt="avatar" />
      </IconButton>
    </Dropdown>
  );
};

export default AccountDropdown;

const LogoutBtn = styled.div`
  color: red;
  cursor: pointer;
  text-align: center;
`;
