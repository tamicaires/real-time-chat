import { Request, Response } from "express";
import { createChatGroupService } from "../factories/createChatGroupService";
import { CreateChatGroupBody } from "../dtos/createChatGroupBody copy";
import { io } from "../../../http";


export class ChatGroupController {
  public chatGroupService = createChatGroupService();

  async create(req: Request, res: Response) {
    const { name, description } = req.body as CreateChatGroupBody;

    const chatGroup = await this.chatGroupService.create({
      name,
      description,
    });

    io.emit("chat-room", chatGroup);
    return res.json(chatGroup);
  }

  async updateChatGroup(req: Request, res: Response) {
    const userId = req.userId;
    const { groupId } = req.params;
    const { name, description } = req.body;

    const chatGroup = await this.chatGroupService.updateChatGroup(
      {
        id: groupId,
        name,
        description,
      },
      userId
    );

    io.emit("chat-room", chatGroup);
    return res.json(chatGroup);
  }

  async getChatGroup(req: Request, res: Response) {
    const userId = req.userId;
    const { groupId } = req.params;

    const chatGroup = await this.chatGroupService.getChatGroup(groupId, userId);

    io.emit("chat-room", chatGroup);
    return res.json(chatGroup);
  }

  async listChatGroups(req: Request, res: Response) {
    const userId = req.userId;

    const chatGroups = await this.chatGroupService.listChatGroups(userId);

    return res.json(chatGroups);
  }
}
