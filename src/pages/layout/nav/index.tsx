import { Menu, MenuProps } from "antd";
import Color from "color";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { useLocation, useMatches, useNavigate } from "react-router-dom";

import { menuRoutes } from "@/router/menuList";
import { useThemeToken } from "@/hooks/useThemeToken";
import Scrollbar from "@/components/Scrollbar";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { colorBgElevated } = useThemeToken();
  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  };
  const menuList: MenuProps["items"] = menuRoutes;
  const onClick = () => {};
  return (
    <div className="mt-3">
      <Scrollbar style={{ height: "calc(100% - 60px)" }}>
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
