import { Request, Response, Router } from "express";

import { AuthController } from "../controllers/AuthController";
import { AuthMiddleware } from "../middlewares/auth";
import { UserChatGroupController } from "../controllers/UserChatGroup";
import { ChatGroupController } from "../app/chatGroups/controllers/chatGroup.controller";
import { MessageController } from "../app/messages/controllers/message.controller";
import { UserController } from "../app/users/controllers/user.controller";

const userController = new UserController();
const authController = new AuthController();
const chatGroupController = new ChatGroupController();
const messageController = new MessageController();
const userChatGroupController = new UserChatGroupController();

export const router = Router();

//Rotas para usuário
router.post("/create", async (req: Request, res: Response) => {
  await userController.create(req, res);
});
router.get("/users", AuthMiddleware, async (req: Request, res: Response) => {
  await userController.listUsers(req, res);
});
router.post("/login", authController.authenticate);

// Rotas para chat grupos
router.post("/chat-groups", AuthMiddleware, async (req: Request, res: Response) => {
  await chatGroupController.create(req, res);
});
router.put("/chat-groups/:groupId", AuthMiddleware, async (req: Request, res: Response) => {
  await chatGroupController.updateChatGroup(req, res);
});
router.get("/chat-groups/:groupId", AuthMiddleware, async (req: Request, res: Response) => {
  await chatGroupController.getChatGroup(req, res);
});
router.get("/chat-groups", AuthMiddleware, async (req: Request, res: Response) => {
  await chatGroupController.listChatGroups(req, res);
});

//  Rotas para lidar com relacionamento User e Chat Group
router.post("/chat-groups/:groupId/add-user", AuthMiddleware, userChatGroupController.addUserToGroup);
router.delete("/chat-groups/:groupId/leave-chat", AuthMiddleware, userChatGroupController.leaveChatGroup);
router.get("/user-chat-groups", AuthMiddleware, userChatGroupController.getMyChats);

// Rotas para mensagens
router.post("/message", AuthMiddleware, async (req: Request, res: Response) => {
  await messageController.create(req, res);
});
router.get("/message/:groupId", AuthMiddleware, async (req: Request, res: Response) => {
  await messageController.listMessages(req, res);
});

// Rota padrão para lidar com URLs não encontradas
router.all("*", (req, res) =>
  res.status(404).json({ error: "URL not found" })
);

