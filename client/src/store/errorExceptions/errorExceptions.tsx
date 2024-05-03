import { create } from "zustand";

interface ErrorState {
  hasApiError: number | null;
  setHasApiError: (hasError: number | null) => void;
}

export const useApiErrorStore = create<ErrorState>((set) => ({
  hasApiError: null,
  setHasApiError: (hasError) => set({ hasApiError: hasError }),
}));
