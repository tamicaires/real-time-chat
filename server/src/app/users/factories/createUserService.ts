import PrismaUserRepository from "../repository/PrismaUserRepository/PrismaUserRepository";
import UserService from "../service/user.service";

export function createUserService(): UserService {
  const userRepository = new PrismaUserRepository();
  const userService = new UserService(userRepository);
  return userService;
}
