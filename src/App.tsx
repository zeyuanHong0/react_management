import { App as AntdApp } from "antd";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import router from "@/router";
import AntdConfig from "@/theme/antd";

function App() {
  return (
    <>
      <AntdConfig>
        <AntdApp>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </AntdApp>
      </AntdConfig>
    </>
  );
}

export default App;
