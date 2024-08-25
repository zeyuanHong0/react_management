import { create } from "zustand";
import { persist } from "zustand/middleware";
import userStore from "./modules/user";

const useStore = create(
  persist(
    (set) => ({
      ...userStore(set),
    }),
    {
      name: "userInfo",
    }
  )
);

export default useStore;
