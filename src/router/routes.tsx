import React, { lazy } from "react";
import Login from "@/pages/login";
import Layout from "@/pages/layout";
import Authorization from "@/components/Authorization";

const Home = lazy(() => import("@/pages/home"));
const Screen = lazy(() => import("@/pages/screen"));
const User = lazy(() => import("@/pages/acl/user"));
const Role = lazy(() => import("@/pages/acl/role"));
const Permission = lazy(() => import("@/pages/acl/permission"));
const Trademark = lazy(() => import("@/pages/product/trademark"));
const Attr = lazy(() => import("@/pages/product/attr"));
const Spu = lazy(() => import("@/pages/product/spu"));
const Sku = lazy(() => import("@/pages/product/sku"));

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Authorization>
        <Layout />
      </Authorization>
    ),
    children: [
      // 首页
      {
        path: "/home",
        element: <Home />,
      },
      // 数据大屏
      {
        path: "/screen",
        element: <Screen />,
      },
      // 用户管理
      {
        path: "/acl/user",
        element: <User />,
      },
      // 权限管理
      {
        path: "/acl/role",
        element: <Role />,
      },
      // 菜单管理
      {
        path: "/acl/permission",
        element: <Permission />,
      },
      {
        path: "/product/trademark",
        element: <Trademark />,
      },
      {
        path: "/product/attr",
        element: <Attr />,
      },
      {
        path: "/product/spu",
        element: <Spu />,
      },
      {
        path: "/product/sku",
        element: <Sku />,
      },
    ],
  },
];

export default routes;
