import { z } from "zod";

export const createChatGroupSchema = z.object({
  name: z.string().min(1, "O campo Nome do grupo é obrigatório"),
  description: z.string(),
});
