import React, { lazy, Suspense } from "react";
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
  },
];

export default routes;
