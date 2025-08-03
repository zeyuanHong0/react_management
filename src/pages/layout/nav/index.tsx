import { Menu, MenuProps } from "antd";
import { CSSProperties, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { menuRoutes } from "@/router/menuList";
import { useThemeToken } from "@/theme/hooks";
import useSettingStore from "@/store/settingStore.ts";

import Scrollbar from "@/components/Scrollbar";

const Nav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  const { colorBgElevated } = useThemeToken();
  const { isFold, openKeys, setOpenKeys, addTabs } = useSettingStore();
  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  };
  const menuList: MenuProps["items"] = useMemo(() => menuRoutes, [menuRoutes]);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
    setOpenKeys(key);
    addTabs(key);
  };
  return (
    <div className="pt-3 box-border h-[calc(100vh-60px)]">
      <Scrollbar
        style={{
          height: "100%",
        }}
      >
        {/* <!-- Sidebar Menu --> */}
        <Menu
          mode="inline"
          items={menuList}
          className="h-full !border-none"
          selectedKeys={[pathname]}
          defaultOpenKeys={openKeys}
          onClick={onClick}
          style={menuStyle}
          inlineCollapsed={isFold}
          theme="light"
        />
      </Scrollbar>
    </div>
  );
};

export default Nav;
