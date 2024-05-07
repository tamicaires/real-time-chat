import { User as UserRaw } from "@prisma/client";
import { User } from "../../entities/User";

export class PrismaUserMapper {
  static toPrisma(user: User): UserRaw {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  static toDomain(userRaw: UserRaw): User {
    return new User(
      {
        username: userRaw.username,
        email: userRaw.email,
        password: userRaw.password,
      },
      userRaw.id
    );
  }
}
