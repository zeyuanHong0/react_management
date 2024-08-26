import { GET_TOKEN } from "@/utils/token";
import useStore from "@/store";
import { Navigate } from "react-router-dom";

const Authorization = ({ children }: { children: React.ReactNode }) => {
  const {
    userInfo: { name },
  } = useStore();
  // 判断token是否存在以及用户信息是否存在
  if (GET_TOKEN() && name) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default Authorization;
