import create from "zustand";

export const useTestStore = create((set) => ({
  value1: 0,
  increaseValue1: () => set((state) => ({ value1: state.value1 + 1 })),
  decreaseValue1: () => set((state) => ({ value1: state.value1 - 1 })),

  value2: 0,
  increaseValue2: () => set((state) => ({ value2: state.value2 + 1 })),
  decreaseValue2: () => set((state) => ({ value2: state.value2 - 1 })),
}));
