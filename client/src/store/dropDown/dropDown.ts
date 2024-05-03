import { create } from 'zustand';

interface DropDownState {
  activeField: boolean;
  setActiveField: (isActive: boolean) => void;
}

export const useDropDownStore = create<DropDownState>((set) => ({
  activeField: false,
  setActiveField: (isActive) => set({ activeField: isActive }),
}));
