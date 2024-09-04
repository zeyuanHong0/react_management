import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const Tabbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="w-full h-full flex justify-between items-center bg-[rgb(247, 245, 245)] pl-[10px] pr-[10px]">
      <div>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>
    </div>
  );
};

export default Tabbar;
