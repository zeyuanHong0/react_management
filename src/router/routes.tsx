import React, { lazy } from "react";
import Login from "@/pages/login";
import Layout from "@/pages/layout";
import Authorization from "@/components/Authorization";

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
        element: lazy(() => import("@/pages/home")),
      },
      // 数据大屏
      {
        path: "/screen",
        element: lazy(() => import("@/pages/screen")),
      },
      // 用户管理
      {
        path: "/acl/user",
        element: lazy(() => import("@/pages/acl/user")),
      },
      // 权限管理
      {
        path: "/acl/role",
        element: lazy(() => import("@/pages/acl/role")),
      },
      // 菜单管理
      {
        path: "/acl/permission",
        element: lazy(() => import("@/pages/acl/permission")),
      },
      {
        path: "/product/trademark",
        element: lazy(() => import("@/pages/product/trademark")),
      },
      {
        path: "/product/attr",
        element: lazy(() => import("@/pages/product/attr")),
      },
      {
        path: "/product/spu",
        element: lazy(() => import("@/pages/product/spu")),
      },
      {
        path: "/product/sku",
        element: lazy(() => import("@/pages/product/sku")),
      },
    ],
  },
];

export default routes;
