import { Request, Response } from "express";
import { createUserService } from "../factories/createUserService";
import { CreateUserBody } from "../dtos/createUserBody";

export class UserController {
  public userService = createUserService();

  async create(req: Request, res: Response) {
    const { username, email, password } = req.body as CreateUserBody;

    const user = await this.userService.create({
      username,
      email,
      password,
    });

    return res.json(user);
  }

  async listUsers(req: Request, res: Response) {

    const users = await this.userService.listUsers();

    return res.json(users);
  }
}
