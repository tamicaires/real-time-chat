import PrismaChatGroupRepository from "../repository/PrismaChatGroupRepository/PrismaChatGroupRepository";
import ChatGroupService from "../service/chatgroup.service";

export function createChatGroupService(): ChatGroupService {
  const chatGroupRepository = new PrismaChatGroupRepository();
  const chatGroupService = new ChatGroupService(chatGroupRepository);
  return chatGroupService;
}
