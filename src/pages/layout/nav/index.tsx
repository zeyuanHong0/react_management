import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  LockOutlined,
  UserOutlined,
  UserSwitchOutlined,
  WindowsOutlined,
  ProductOutlined,
  TrademarkCircleOutlined,
  BookOutlined,
  LaptopOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Color from "color";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";

import { useThemeToken } from "@/hooks/useThemeToken";
import Scrollbar from "@/components/Scrollbar";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { colorPrimary, colorTextBase, colorBgElevated, colorBorder } =
    useThemeToken();
  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  };
  const menuList: MenuProps["items"] = [
    {
      label: "首页",
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "数据大屏",
      key: "/screen",
      icon: <FundProjectionScreenOutlined />,
    },
    {
      label: "权限管理",
      key: "/acl",
      icon: <LockOutlined />,
      children: [
        {
          label: "用户管理",
          key: "/acl/user",
          icon: <UserOutlined />,
        },
        {
          label: "角色管理",
          key: "/acl/role",
          icon: <UserSwitchOutlined />,
        },
        {
          label: "菜单管理",
          key: "/acl/permission",
          icon: <WindowsOutlined />,
        },
      ],
    },
    {
      label: "商品管理",
      key: "/product",
      icon: <ProductOutlined />,
      children: [
        {
          label: "品牌管理",
          key: "/product/trademark",
          icon: <TrademarkCircleOutlined />,
        },
        {
          label: "属性管理",
          key: "/product/attr",
          icon: <BookOutlined />,
        },
        {
          label: "SPU管理",
          key: "/product/spu",
          icon: <LaptopOutlined />,
        },
        {
          label: "SKU管理",
          key: "/product/sku",
          icon: <RestOutlined />,
        },
      ],
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
