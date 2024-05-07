import { randomUUID } from "crypto";

interface UserProps {
  username: string;
  email: string;
  password: string;
}

export class User {
  private readonly _id: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _createdAt: Date;

  constructor(props: UserProps, id?: string) {
    this._id = id || randomUUID();
    this._username = props.username;
    this._email = props.email;
    this._password = props.password;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }
}
