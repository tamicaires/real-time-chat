import { randomUUID } from "crypto";

interface MessageProps {
  text: string;
  senderId: string;
  chatGroupId: string;
}

export class Message {
  private readonly _id: string;
  private _text: string;
  private _senderId: string;
  private _chatGroupId: string;
  private _createdAt: Date;

  constructor(props: MessageProps, id?: string) {
    this._id = id || randomUUID();
    this._text = props.text;
    this._senderId = props.senderId;
    this._chatGroupId = props.chatGroupId;
    this._createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  get text(): string {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  get senderId(): string {
    return this._senderId;
  }

  set senderId(senderId: string) {
    this._senderId = senderId;
  }

  get chatGroupId(): string {
    return this._chatGroupId;
  }

  set chatGroupId(chatGroupId: string) {
    this._chatGroupId = chatGroupId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }
}
