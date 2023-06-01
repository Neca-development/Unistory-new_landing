import { create } from "zustand";

interface IAnimationStore {
  shouldAnimate: boolean,
  setShouldAnimate: () => void
}
export const useAnimationStore = create<IAnimationStore>((set) => ({
  shouldAnimate: true,
  setShouldAnimate: () => {
    set({shouldAnimate: false})
  }
}))