import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // 获取环境变量
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // 相对路径别名配置，使用 @ 代替 src
        "#": path.resolve(__dirname, "./types"),
      },
    },
    css: {
      preprocessorOptions: {
        // 全局引入变量
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ""),
        },
      },
    },
  };
});
