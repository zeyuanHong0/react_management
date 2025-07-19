import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";

type Props = {
  children: React.ReactNode;
};
export default function AntdConfig({ children }: Props) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#00a76f",
        },
        components: {
          Menu: {
            fontSize: 14,
            colorFillAlter: "transparent",
            itemColor: "rgb(145, 158, 171)",
            motionDurationMid: "0.125s",
            motionDurationSlow: "0.125s",
          },
        },
      }}
    >
      {/* https://ant.design/docs/react/compatible-style-cn#styleprovider */}
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
