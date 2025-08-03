import Color from "color";
import classNames from "classnames";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useThemeToken } from "@/theme/hooks";
import useSettingStore from "@/store/settingStore.ts";

import Logo from "@/components/Logo";
import Nav from "../nav";

const Menu = ({ showFoldBtn = true }) => {
  const { colorPrimary, colorBorder } = useThemeToken();
  const { isFold, setFold } = useSettingStore();
  return (
    <div
      className={classNames("layout_menu", "h-full", "bg-white", "text-white", {
        "w-base-menu-width": !isFold,
        "w-base-menu-min-width": isFold,
      })}
      style={{
        borderRight: `1px dashed ${Color(colorBorder).alpha(0.6).toString()}`,
      }}
    >
      <div className="relative box-border flex h-[60px] items-center justify-center pt-[10px]">
        <Logo />
        {!isFold && (
          <span
            className="ml-2 text-xl font-bold"
            style={{ color: colorPrimary }}
          >
            Alexander Smith
          </span>
        )}
        {showFoldBtn && (
          <div
            className="absolute right-0 top-1/2 z-50 mt-[-5px] translate-x-1/2 transform cursor-pointer"
            onClick={() => setFold(!isFold)}
          >
            {isFold ? (
              <MenuUnfoldOutlined style={{ color: "#637381", fontSize: 16 }} />
            ) : (
              <MenuFoldOutlined style={{ color: "#637381", fontSize: 16 }} />
            )}
          </div>
        )}
      </div>
      {/* 菜单内容 */}
      <Nav />
    </div>
  );
};

export default Menu;
