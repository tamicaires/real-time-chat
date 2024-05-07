import { CreateMessageBody } from "../dtos/createMessageBody";
import { Message } from "../entities/Message";
import { MessageRepository } from "../repository/message.repository";

export default class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async create(message: CreateMessageBody) {
    const messageRaw = new Message(message);

    await this.messageRepository.create(messageRaw);

    return messageRaw;
  }

  async listMessages(groupID: string) {
    const messages = await this.messageRepository.listMessages(groupID);

    return messages;
  }
}
