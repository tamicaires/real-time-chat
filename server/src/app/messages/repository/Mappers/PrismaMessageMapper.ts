import { Message as MessageRaw } from "@prisma/client";
import { Message } from "../../entities/Message";

export class PrismaMessageMapper {
  static toPrisma(message: Message): MessageRaw {
    return {
      id: message.id,
      text: message.text,
      senderId: message.senderId,
      fromMe: false,
      chatGroupId: message.chatGroupId,
      createdAt: message.createdAt,
    };
  }

  static toDomain(message: MessageRaw): Message {
    return new Message(
      {
        text: message.text,
        senderId: message.senderId,
        chatGroupId: message.chatGroupId,
      },
      message.id
    );
  }

  static toDomainArray(messages: MessageRaw[]): Message[] {
    return messages.map((message) => this.toDomain(message));
  }
}
