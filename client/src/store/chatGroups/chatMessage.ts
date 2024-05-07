import { create } from "zustand";
import { ChatMessage } from "../../interface/chat-message.interface";

interface MessageState {
  lastMessages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
}

export const useMessageStore = create<MessageState>((set) => ({
  lastMessages: [],
  addMessage: (message) =>
    set((state) => ({ lastMessages: [...state.lastMessages, message] })),
}));