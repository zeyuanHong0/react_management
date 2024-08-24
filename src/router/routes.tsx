import React, { lazy, Suspense } from "react";


const Login = lazy(() => import("@/pages/login"));

const routes = [
  {
    path: "/login",
    element: (
      <Suspense fallback={"加载中"}>
        <Login />
      </Suspense>
    ),
  },
];

export default routes;
