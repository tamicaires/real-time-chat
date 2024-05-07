import { randomUUID } from "crypto";

interface ChatGroupProps {
  name: string;
  description?: string | null;
}

export class ChatGroup {
  private readonly _id: string;
  private _name: string;
  private _description?: string | null;
  private _createdAt: Date;

  constructor(props: ChatGroupProps, id?: string) {
    this._id = id || randomUUID();
    this._name = props.name;
    this._description = props.description;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string | null | undefined {
    return this._description;
  }

  set description(description: string | undefined) {
    this._description = description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }
}
