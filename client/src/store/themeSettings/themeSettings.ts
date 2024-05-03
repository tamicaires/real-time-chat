import { create } from "zustand";

interface ThemeState {
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentColor: "violet",
  setCurrentColor: (color) => set({ currentColor: color }),
}));
