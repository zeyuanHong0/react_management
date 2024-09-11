import { findParentKeys } from "@/utils";
import { menuRoutes } from "@/router/menuList";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";

type settingState = {
  isFold: boolean;
  openKeys: string[];
  setFold: (isFold: boolean) => void;
  setOpenKeys: (key: string) => void;
};

const settingStore = (set: any): settingState => {
  return {
    isFold: false, //menu是否折叠
    openKeys: getSessionStorage("openKeys")
      ? JSON.parse(getSessionStorage("openKeys") as string)
      : [],
    setFold: (isFold: boolean) => set({ isFold }),
    setOpenKeys: (key: string) => {
      const arr = findParentKeys(menuRoutes, key);
      set({
        openKeys: arr,
      });
      setSessionStorage("openKeys", JSON.stringify(arr));
    },
  };
};

export default settingStore;
