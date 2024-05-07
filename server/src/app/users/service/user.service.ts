import { STATUS_CODES } from "http";
import { CreateUserBody } from "../dtos/createUserBody";
import { User } from "../entities/User";
import { UserRepository } from "../repository/user.repository";
import { hash } from "bcrypt";

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(user: CreateUserBody) {
    const userExists = await this.userRepository.getOne(user.email);

    if (userExists) {
      throw Error("User already exists");
    }

    const hash_password = await hash(user.password, 8);

    const userRaw = new User({
      email: user.email,
      password: hash_password,
      username: user.username,
    });

    const userData = await this.userRepository.create(userRaw);

    return userData;
  }

  async listUsers() {
    const users = await this.userRepository.listUsers();

    return users;
  }
}
