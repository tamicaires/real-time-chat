import { ChatMessage } from "./chat-message.interface";

export interface ChatGroupsWithMessages {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  messages: ChatMessage[];
  UserChatGroup: {
    userId: string;
}[];
}