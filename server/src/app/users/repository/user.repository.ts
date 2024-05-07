import { User } from "../entities/User";

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract getOne(email: string): Promise<User | null>;
  abstract listUsers(): Promise<User[]>;
}
