import { create } from "zustand";

interface ModalState {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  editModal: boolean;
  setEditModal: (show: boolean) => void;
  joinChatModal: boolean;
  setJoinChatModal: (show: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  showModal: false,
  setShowModal: (show) => set({ showModal: show }),
  editModal: false,
  setEditModal: (show) => set({ editModal: show }),
  joinChatModal: false,
  setJoinChatModal: (show) => set({ joinChatModal: show }),
}));
