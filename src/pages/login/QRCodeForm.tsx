import React from "react";
import { QRCode } from "antd";

import BackBtn from "./components/BackBtn";

interface QRCodeFormProps {
  goBack: () => void;
}

const QRCodeForm: React.FC<QRCodeFormProps> = ({ goBack }) => {
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">二维码登录</div>
      <div className="mb-3 flex w-full justify-center">
        <QRCode value={"https://ant.design"} size={300} />
      </div>
      <div className="mb-4 text-center">扫码后点击'确认'，即可完成登录</div>
      <BackBtn goBack={goBack} />
    </>
  );
};

export default QRCodeForm;
