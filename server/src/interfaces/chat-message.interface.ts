export interface ChatMessage {
  text: string;
  senderId: string;
  chatGroupId: string;
  createdAt: Date;
}

export interface IChatMessage {
  text: string;
  senderId: string;
  sender: string;
  chatGroupId: string;
  createdAt: Date;
}
