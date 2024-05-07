import { ChatGroup as ChatGroupRaw } from "@prisma/client";
import { ChatGroup } from "../../entities/ChatGroup";

export class PrismaChatGroupMapper {
  static toPrisma({
    id,
    name,
    description,
    createdAt,
  }: ChatGroup): ChatGroupRaw {
    return {
      id,
      name,
      description: description !== undefined ? description : null,
      createdAt,
    };
  }

  static toDomain({ id, name, description }: ChatGroupRaw): ChatGroup {
    return new ChatGroup(
      {
        name,
        description,
      },
      id
    );
  }
}
