import "./index.scss";
import { notification, Menu } from "antd";
import { getTime } from "@/utils/getTime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (location.state?.from === "/login") {
      handleWelcome();
    }
  }, [location]);
  const handleWelcome = () => {
    api.success({
      message: `Hi,${getTime()}好`,
      description: "欢迎回来",
      placement: "topRight",
    });
  };
  return (
    <>
      {contextHolder}
      <div>首页</div>
    </>
  );
};

export default Layout;
