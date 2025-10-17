import { create } from "zustand";

export const useModeStore = create((set) => ({
  currentMode: "weekly",
  setMode: (newMode) => set(() => ({
    currentMode: newMode
  })),
}));
