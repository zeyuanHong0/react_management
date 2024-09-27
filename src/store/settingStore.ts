import { create } from "zustand";

import { findParentKeys, findLabelByKey, handleNavigate } from "@/utils";
import { menuRoutes } from "@/router/menuList";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";

type Tab = {
  label: string;
  key: string;
  closable?: boolean;
};

type settingState = {
  isFold: boolean;
  openKeys: string[];
  openTabs: Tab[];
  activeTabsKey: string;
  setFold: (isFold: boolean) => void;
  setOpenKeys: (key: string) => void;
  addTabs: (key: string) => void;
  removeTabs: (key: string, navigate: (key: string) => void) => void;
  setActiveTabsKey: (key: string) => void;
};

const useSettingStore = create((set: any): settingState => {
  const activeTabsKey = getSessionStorage("activeTabsKey") || menuRoutes[0].key;
  const initialTabLabel = findLabelByKey(menuRoutes, activeTabsKey) as string;

  return {
    isFold: false, // menu 是否折叠
    openKeys: getSessionStorage("openKeys")
      ? JSON.parse(getSessionStorage("openKeys") as string)
      : [],
    openTabs: initialTabLabel
      ? [{ label: initialTabLabel, key: activeTabsKey, closable: false }]
      : [],
    activeTabsKey,
    setFold: (isFold: boolean) => set({ isFold }),
    setOpenKeys: (key: string) => {
      const arr = findParentKeys(menuRoutes, key);
      set({
        activeTabsKey: key,
        openKeys: arr,
      });
      setSessionStorage("openKeys", JSON.stringify(arr));
      setSessionStorage("activeTabsKey", key);
    },
    setActiveTabsKey: (key: string) => {
      set({ activeTabsKey: key });
    },
    addTabs: (key: string) => {
      set((state: settingState) => {
        if (state.openTabs.some((i: Tab) => i.key === key)) {
          return state; // 返回当前状态，不做修改
        }
        const label = findLabelByKey(menuRoutes, key) as string;
        const newOpenTabs = [...state.openTabs, { label, key }];
        return {
          ...state,
          openTabs: newOpenTabs.map((tab: Tab) => {
            return {
              ...tab,
              closable: newOpenTabs.length > 1,
            };
          }),
        };
      });
    },
    removeTabs: (key: string, navigate) => {
      set((state: settingState) => {
        // 判断需要关闭的标签是否是当前激活的标签
        if (state.activeTabsKey === key) {
          // 如果是当前激活的标签，判断是否只有一个标签
          if (state.openTabs.length === 1) {
            return state;
          }
          // 如果有多个标签，找到上一个激活的标签
          const index = state.openTabs.findIndex(
            (item: Tab) => item.key === state.activeTabsKey
          );
          let activeKey = "";
          if (index === 0) {
            activeKey = state.openTabs[1].key;
          } else {
            activeKey = state.openTabs[index - 1].key;
          }
          setSessionStorage("activeTabsKey", activeKey);
          handleNavigate(activeKey, navigate);
          const newOpenTabs = state.openTabs.filter(
            (item: Tab) => item.key !== key
          );
          return {
            ...state,
            activeTabsKey: activeKey,
            openTabs: newOpenTabs.map((tab: Tab) => {
              return {
                ...tab,
                closable: newOpenTabs.length > 1,
              };
            }),
          };
        }
        const newOpenTabs = state.openTabs.filter(
          (item: Tab) => item.key !== key
        );
        return {
          ...state,
          openTabs: newOpenTabs.map((tab: Tab) => {
            return {
              ...tab,
              closable: newOpenTabs.length > 1,
            };
          }),
        };
      });
    },
  };
});

export default useSettingStore;
