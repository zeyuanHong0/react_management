import React from "react";
import { LeftOutlined } from "@ant-design/icons";

interface BackBtnProps {
  goBack: () => void;
}

const BackBtn: React.FC<BackBtnProps> = ({ goBack }) => {
  return (
    <>
      <div
        onClick={goBack}
        className="flex items-center gap-[2px] my-0 mx-auto cursor-pointer text-sm text-[#00b8d9] hover:text-[#80e6f8] hover:underline"
      >
        <LeftOutlined />
        <span>返回</span>
      </div>
    </>
  );
};

export default BackBtn;
