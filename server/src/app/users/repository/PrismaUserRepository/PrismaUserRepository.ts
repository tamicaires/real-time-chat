import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../user.repository";
import { PrismaUserMapper } from "../Mappers/PrismaUserMapper";
import { User } from "../../entities/User";

export default class PrismaUserRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
        username: user.username,
        createdAt: user.createdAt       
      },
    });
  }

  async getOne(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if(!user) return null;

    return PrismaUserMapper.toDomain(user);
  }

  async listUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});

    return users.map(PrismaUserMapper.toDomain);
  }

}
