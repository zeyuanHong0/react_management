import { create } from "zustand";

import { findParentKeys, findLabelByKey } from "@/utils";
import { menuRoutes } from "@/router/menuList";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";

type Tab = {
  label: string;
  key: string;
};

type settingState = {
  isFold: boolean;
  openKeys: string[];
  openTabs: Tab[];
  setFold: (isFold: boolean) => void;
  setOpenKeys: (key: string) => void;
  addTabs: (key: string) => void;
  removeTabs: (key: string) => void;
};

const useSettingStore = create((set: any): settingState => {
  return {
    isFold: false, // menu 是否折叠
    openKeys: getSessionStorage("openKeys")
      ? JSON.parse(getSessionStorage("openKeys") as string)
      : [],
    openTabs: [],
    setFold: (isFold: boolean) => set({ isFold }),
    setOpenKeys: (key: string) => {
      const arr = findParentKeys(menuRoutes, key);
      set({
        openKeys: arr,
      });
      setSessionStorage("openKeys", JSON.stringify(arr));
    },
    addTabs: (key: string) => {
      set((state: settingState) => {
        if (state.openTabs.some((i: Tab) => i.key === key)) {
          return state; // 返回当前状态，不做修改
        }
        const label = findLabelByKey(menuRoutes, key) as string;
        return {
          ...state,
          openTabs: [{ label, key }, ...state.openTabs],
        };
      });
    },
    removeTabs: (key: string) => {
      set((state: settingState) => {
        return {
          ...state,
          openTabs: state.openTabs.filter((item: Tab) => item.key !== key),
        };
      });
    },
  };
});

export default useSettingStore;
