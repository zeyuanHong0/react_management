import { Breadcrumb } from "antd";
import { useMatches, Link } from "react-router-dom";

import { menuRoutes } from "@/router/menuList";
import { useBreadcrumbPath } from "../hooks/use-breadcrumb-path";

import { Iconify } from "@/components/Icon";

/**
 * 将菜单树和面包屑路径转为 breadcrumb 项结构
 */
const menuToBreadList = (menuRoutes, breadcrumb) => {
  const findNodeByKey = (nodes, key) => {
    for (const node of nodes) {
      if (node.key === key) return node;
      if (node.children) {
        const found = findNodeByKey(node.children, key);
        if (found) return found;
      }
    }
    return null;
  };

  return breadcrumb.map((bc, index) => {
    const node = findNodeByKey(menuRoutes, bc.key);
    const isLast = index === breadcrumb.length - 1;

    // 如果当前节点有 children，则构造 dropdown menu
    if (!isLast && node?.children) {
      const menuItems = node.children.map((child) => ({
        key: child.key,
        label: <Link to={child.key}>{child.label}</Link>,
      }));

      return {
        title: node.label,
        menu: {
          items: menuItems,
        },
      };
    }

    // 最后一个不带 menu
    return {
      title: node?.label || bc.label,
    };
  });
};

const BreadCrumb = () => {
  // 需要拿到当前路由的匹配信息
  const matches = useMatches();
  console.log("matches", matches);
  // const items = menuToBreadList(menuRoutes);
  const breadcrumb = useBreadcrumbPath(
    menuRoutes,
    matches[matches.length - 1].pathname,
  );
  console.log("breadcrumb", breadcrumb);
  const items = menuToBreadList(menuRoutes, breadcrumb);
  // const items = [
  //   {
  //     title: "仪表",
  //     menu: {
  //       items: [
  //         {
  //           key: "/dashboard/workbench",
  //           label: <Link to="/dashboard/workbench">工作台</Link>,
  //         },
  //         {
  //           key: "/dashboard/analysis",
  //           label: <Link to="/dashboard/analysis">分析</Link>,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     title: "工作台",
  //   },
  // ];

  return (
    <Breadcrumb separator={<Iconify icon="ph:dot-duotone" />} items={items} />
  );
};

export default BreadCrumb;
