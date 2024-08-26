import { create } from "zustand";
import userStore from "./modules/user";

const useStore: any = create((set: any) => ({
  ...userStore(set),
}));

export default useStore;
