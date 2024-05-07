import { PrismaClient } from "@prisma/client";
import { ChatGroup } from "../../entities/ChatGroup";
import { ChatGroupRepository } from "../chatGroup.repository";
import { PrismaChatGroupMapper } from "../Mappers/PrismaChatGroupMapper";
import { UpdateChatGroupBody } from "../../dtos/updateChatGroupBody";
import { ChatGroupsWithMessages } from "../../../interfaces/chat-group.interface";

export default class PrismaChatGroupRepository implements ChatGroupRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(chatGroup: ChatGroup): Promise<void> {
    await this.prisma.chatGroup.create({
      data: {
        id: chatGroup.id,
        name: chatGroup.name,
        description: chatGroup.description,
        createdAt: chatGroup.createdAt,
      },
    });
  }

  async update(chatGroup: UpdateChatGroupBody): Promise<void> {
    await this.prisma.chatGroup.update({
      data: chatGroup,
      where: {
        id: chatGroup.id,
      },
    });
  }

  async getChatGroup(groupId: string, userId: string): Promise<any> {
    const chatGroupRaw = await this.prisma.chatGroup.findUnique({
      where: { id: groupId },
      include: {
        messages: {
          select: {
            sender: {
              select: {
                username: true,
              },
            },
            text: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        UserChatGroup: {
          where: {
            userId: userId,
          },
          select: {
            userId: true,
          },
        },
      },
    });

    if (!chatGroupRaw) return null;

    return chatGroupRaw;
  }

  async listChatGroups(userId: string): Promise<any> {
    const chats = await this.prisma.chatGroup.findMany({
      include: {
        UserChatGroup: {
          where: {
            userId: userId,
          },
          select: {
            userId: true,
          },
        },
        messages: {
          select: {
            sender: true,
            text: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    return chats;
  }
}
