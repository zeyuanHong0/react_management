type settingState = {
  isFold: boolean;
  setFold: (isFold: boolean) => void;
};

const settingStore = (set: any): settingState => {
  return {
    isFold: false,
    setFold: (isFold: boolean) => set({ isFold }),
  };
};

export default settingStore;