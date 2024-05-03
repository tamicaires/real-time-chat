export interface ChatGroup {
  id: string;
  name: string;
  description: string;
  createdAt: Date
  sender: string;
  lastMessage: string;
  sentLastMessage: Date;
  isMyGroup: boolean;
}

export interface CreateChatGroup {
  name: string;
  description?: string;
}

export interface UpdateChatGroup {
  name: string;
  description?: string;
}