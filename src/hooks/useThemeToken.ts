import { theme } from "antd";
import { useMemo } from "react";

// 获取主题
export function useThemeToken() {
  const { token } = theme.useToken();
  return useMemo(() => token, [token]);
}
