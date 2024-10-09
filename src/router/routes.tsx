import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Login from "@/pages/login";
import Layout from "@/pages/layout";
import Authorization from "@/components/Authorization";

const Workbench = lazy(() => import("@/pages/dashboard/workbench"));
const Analysis = lazy(() => import("@/pages/dashboard/analysis"));
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
      // 当访问 "/" 时，重定向到 "/dashboard/workbench"
      {
        path: "/",
        element: <Navigate to="/dashboard/workbench" replace />,
      },
      {
        path: "/dashboard/workbench",
        index: true,
        element: (
          <Suspense>
            <Workbench />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/analysis",
        element: (
          <Suspense>
            <Analysis />
          </Suspense>
        ),
      },
      // 首页
      {
        path: "/home",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      // 数据大屏
      {
        path: "/screen",
        element: (
          <Suspense>
            <Screen />
          </Suspense>
        ),
      },
      // 用户管理
      {
        path: "/acl/user",
        element: (
          <Suspense>
            <User />
          </Suspense>
        ),
      },
      // 权限管理
      {
        path: "/acl/role",
        element: (
          <Suspense>
            <Role />
          </Suspense>
        ),
      },
      // 菜单管理
      {
        path: "/acl/permission",
        element: (
          <Suspense>
            <Permission />
          </Suspense>
        ),
      },
      {
        path: "/product/trademark",
        element: (
          <Suspense>
            <Trademark />
          </Suspense>
        ),
      },
      {
        path: "/product/attr",
        element: (
          <Suspense>
            <Attr />
          </Suspense>
        ),
      },
      {
        path: "/product/spu",
        element: (
          <Suspense>
            <Spu />
          </Suspense>
        ),
      },
      {
        path: "/product/sku",
        element: (
          <Suspense>
            <Sku />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
