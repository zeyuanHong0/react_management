import { create } from "zustand";
import userStore from "./modules/user";
import settingStore from "./modules/setting";

const useStore: any = create((set: any) => ({
  ...userStore(set),
  ...settingStore(set),
}));

export default useStore;
