import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.scss";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
