import PrismaMessageRepository from "../repository/PrismaMessageRepository/PrismaMessageRepository";
import MessageService from "../service/message.service";

export function createMessageService(): MessageService {
  const messageRepository = new PrismaMessageRepository();
  const messageService = new MessageService(messageRepository);
  return messageService;
}
