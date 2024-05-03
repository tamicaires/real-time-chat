import { create } from 'zustand';

interface ButtonState {
  activeFilterChatBar: boolean;
  setActiveFilterChatBar: (show: boolean) => void;
}

export const useActiveFilterChatStore = create<ButtonState>((set) => ({
  activeFilterChatBar: true,
  setActiveFilterChatBar: (active) => set({ activeFilterChatBar: active }),
}));
