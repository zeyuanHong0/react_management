import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Login from "@/pages/login";
import Layout from "@/pages/layout";
import Authorization from "@/components/Authorization";

const Workbench = lazy(() => import("@/pages/dashboard/workbench"));
const Analysis = lazy(() => import("@/pages/dashboard/analysis"));
const Home = lazy(() => import("@/pages/home"));
const Screen = lazy(() => import("@/pages/screen"));

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
    ],
  },
];

export default routes;
