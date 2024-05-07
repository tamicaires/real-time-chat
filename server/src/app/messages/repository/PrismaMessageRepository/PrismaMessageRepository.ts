import { PrismaClient } from "@prisma/client";
import { MessageRepository } from "../message.repository";
import { Message } from "../../entities/Message";
import { PrismaMessageMapper } from "../Mappers/PrismaMessageMapper";

export default class PrismaMessageRepository implements MessageRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(message: Message): Promise<void> {
    await this.prisma.message.create({
      data: message,
    });
  }

  async listMessages(groupId: string): Promise<Message[]> {
    const messages = await this.prisma.message.findMany({
      where: {
        chatGroupId: groupId,
      },
      include: {
        sender: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return messages.map(PrismaMessageMapper.toDomain);
  }
}
