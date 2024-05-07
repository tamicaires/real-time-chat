import { Request, Response } from "express";
import { CreateMessageBody } from "../dtos/createMessageBody";
import { createMessageService } from "../factories/createMessageService";
import { io } from "../../../http";

export class MessageController {
  public messageService = createMessageService();

  async create(req: Request, res: Response) {
    const { text, chatGroupId, senderId } = req.body as CreateMessageBody;

    const message = await this.messageService.create({
      text,
      chatGroupId,
      senderId,
    });

    io.emit("chat-room", message);
    return res.json(message);
  }

  async listMessages(req: Request, res: Response) {
    const { groupId } = req.params;

    const messages = await this.messageService.listMessages(groupId);

    return res.json(messages);
  }
}
