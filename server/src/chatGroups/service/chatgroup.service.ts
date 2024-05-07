import { CreateChatGroupBody } from "../dtos/createChatGroupBody copy";
import { UpdateChatGroupBody } from "../dtos/updateChatGroupBody";
import { ChatGroup } from "../entities/ChatGroup";
import { ChatGroupRepository } from "../repository/chatGroup.repository";

export default class ChatGroupService {
  constructor(private chatGroupRepository: ChatGroupRepository) {}

  async create(chatGroup: CreateChatGroupBody) {
    const chat = new ChatGroup(chatGroup);

    await this.chatGroupRepository.create(chat);

    return chat;
  }

  async updateChatGroup(chatGroup: UpdateChatGroupBody, userId: string) {
    const chat = await this.chatGroupRepository.getChatGroup(
      chatGroup.id,
      userId
    );

    if (!chat) throw Error("Chat group not found");

    const updatedChat = await this.chatGroupRepository.update(chatGroup);

    return updatedChat;
  }

  async getChatGroup(chatGroupId: string, userId: string) {
    const chatGroup = await this.chatGroupRepository.getChatGroup(
      chatGroupId,
      userId
    );

    if (!chatGroup) throw new Error("Chat group not found");

    const isMyGroup = chatGroup.UserChatGroup.some(
      (user: { userId: string }) => user.userId === userId
    );
    return { ...chatGroup, isMyGroup };
  }

  async listChatGroups(userId: string) {
    const chatGroups = await this.chatGroupRepository.listChatGroups(userId);

    const chatGroupsWithIsMyGroup = chatGroups.map((chatGroup: any) => {
      const isMyGroup = chatGroup.UserChatGroup.some(
        (user: any) => user.userId === userId
      );
      return { ...chatGroup, isMyGroup };
    });

    return chatGroupsWithIsMyGroup;
  }
}
