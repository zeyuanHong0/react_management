import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import useStore from "@/store";

const Tabbar = () => {
  const { isFold, setFold } = useStore();
  const [fullScreen, setFullScreen] = useState<boolean>(false);

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
    <div className="w-full h-full flex justify-between items-center bg-[rgb(247, 245, 245)] pl-[10px] pr-[10px]">
      <div className="cursor-pointer" onClick={() => setFold(!isFold)}>
        {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="gap-3 flex cursor-pointer">
        {/* 刷新 */}
        <ReloadOutlined onClick={() => window.location.reload()} />
        {/* 全屏 */}
        <Icon onClick={handleFullScreen} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Tabbar;
