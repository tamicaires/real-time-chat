import { create } from "zustand";

interface ThemeState {
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentColor: "#1fc15a",
  setCurrentColor: (color) => set({ currentColor: color }),
}));
