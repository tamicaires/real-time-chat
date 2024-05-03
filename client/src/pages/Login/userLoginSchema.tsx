import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().min(1, "O campo Email é obrigatório").email("E-mail inválido"),
  password: z.string().min(6, "O campo Senha é obrigatório"),
});
