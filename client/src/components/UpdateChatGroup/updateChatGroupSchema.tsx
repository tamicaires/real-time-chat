import { z } from "zod";

export const updateChatGroupSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1, "O campo Nome do grupo é obrigatório"),
  description: z.string(),
});
