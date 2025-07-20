import { Breadcrumb } from "antd";
import { useEffect, useState } from "react";
import { useMatches, Link } from "react-router-dom";

import { Iconify } from "@/components/Icon";

const BreadCrumb = () => {
  const items = [
    {
      path: "/index",
      title: "home",
    },
    {
      path: "/first",
      title: "first",
      children: [
        {
          path: "/general",
          title: "General",
        },
        {
          path: "/layout",
          title: "Layout",
        },
        {
          path: "/navigation",
          title: "Navigation",
        },
      ],
    },
    {
      path: "/second",
      title: "second",
    },
  ];

  function itemRender(currentRoute, params, items, paths) {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? (
      <span>{currentRoute.title}</span>
    ) : (
      <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>
    );
  }

  return <Breadcrumb itemRender={itemRender} items={items} />;
};

export default BreadCrumb;
