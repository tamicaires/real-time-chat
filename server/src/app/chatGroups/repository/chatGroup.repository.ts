import { ChatGroupsWithMessages } from "../../interfaces/chat-group.interface";
import { UpdateChatGroupBody } from "../dtos/updateChatGroupBody";
import { ChatGroup } from "../entities/ChatGroup";

export abstract class ChatGroupRepository {
  abstract create(chatGroup: ChatGroup): Promise<void>;
  abstract update(chatGroup: UpdateChatGroupBody): Promise<void>;
  abstract getChatGroup(groupId: string, userId: string): Promise<any>;
  abstract listChatGroups(userId: string): Promise<ChatGroupsWithMessages[]>;
}
