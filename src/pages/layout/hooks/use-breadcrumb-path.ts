import { useMemo } from "react";

/**
 * 获取当前路由对应的面包屑路径
 * @param routes 菜单路由（树形结构）
 * @param targetKey 当前路由 key（例如 /dashboard/analysis）
 * @return 面包屑路径数组，每个元素包含 label 和 key
 */
export function useBreadcrumbPath(routes, targetKey) {
  const path = useMemo(() => {
    const result: any = [];

    const dfs = (nodes, currentPath) => {
      for (const node of nodes) {
        const nextPath = [...currentPath, { label: node.label, key: node.key }];

        if (node.key === targetKey) {
          result.push(...nextPath);
          return true;
        }

        if (node.children && dfs(node.children, nextPath)) {
          return true;
        }
      }
      return false;
    };

    dfs(routes, []);
    return result;
  }, [routes, targetKey]);

  return path;
}
