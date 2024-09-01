import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Color from "color";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";

import { useThemeToken } from "@/hooks/useThemeToken";
import Scrollbar from "@/components/Scrollbar";

import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { colorPrimary, colorTextBase, colorBgElevated, colorBorder } =
    useThemeToken();
  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  };
  const menuList = [
    {
      label: "首页",
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "文章管理",
      key: "/article",
      icon: <DiffOutlined />,
    },
    {
      label: "创建文章",
      key: "/publish",
      icon: <EditOutlined />,
    },
  ];
  const onClick = () => {};
  return (
    <div className="mt-3">
      <Scrollbar style={{ height: "calc(100% - 60px);" }}>
        {/* <!-- Sidebar Menu --> */}
        <Menu
          mode="inline"
          items={menuList}
          className="h-full !border-none"
          selectedKeys={[pathname]}
          onClick={onClick}
          style={menuStyle}
        />
      </Scrollbar>
    </div>
  );
};

export default Nav;
