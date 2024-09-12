// 递归查找 key 的父级
export const findParentKeys = (
  menuRoutes: any[],
  targetKey: string,
  path: string[] = []
): string[] | null => {
  for (const item of menuRoutes) {
    // 如果当前项就是目标 key，返回收集到的父级 key
    if (item.key === targetKey) {
      return path;
    }
    // 如果当前项有 children，递归查找子项
    if (item.children) {
      const result = findParentKeys(item.children, targetKey, [
        ...path,
        item.key,
      ]);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

// 根据 key 查找对应的 label
export const findLabelByKey = (
  menuRoutes: any[],
  targetKey: string
): string | null => {
  for (const item of menuRoutes) {
    if (item.key === targetKey) {
      return item.label;
    }
    if (item.children) {
      const result = findLabelByKey(item.children, targetKey);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
