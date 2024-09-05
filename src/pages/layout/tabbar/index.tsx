import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import useStore from "@/store";

const Tabbar = () => {
  const { isFold, setFold } = useStore();
  return (
    <div className="w-full h-full flex justify-between items-center bg-[rgb(247, 245, 245)] pl-[10px] pr-[10px]">
      <div className="cursor-pointer" onClick={() => setFold(!isFold)}>
        {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </div>
  );
};

export default Tabbar;
