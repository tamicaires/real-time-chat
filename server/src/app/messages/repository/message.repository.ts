import { Message } from "../entities/Message";

export abstract class MessageRepository {
  abstract create(message: Message): Promise<void>;
  abstract listMessages(groupId: string): Promise<Message[]>;
}
