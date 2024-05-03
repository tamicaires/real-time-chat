import { create } from 'zustand';

interface SidebarState {
  isSidebarOpen: boolean;
  setSidebarOpen: (show: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (show) => set({ isSidebarOpen: show }),
}));
