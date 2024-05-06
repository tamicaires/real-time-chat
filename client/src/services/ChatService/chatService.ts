import { Api } from "../Api/ApiConfig";
import { getTokenLocalStorage } from "../../context/AuthProvider/util";
import { AxiosRequestConfig } from "axios";
import {
  CreateChatGroup,
  UpdateChatGroup,
} from "../../interface/chat-group.interface";

const token = getTokenLocalStorage();

const handleRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await Api().request(config);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const chatService = {
  addUserToChat: async (groupId: string) => {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: `/chat-groups/${groupId}/add-user`,
      headers: { Authorization: `Bearer ${token}` },
    };

    return handleRequest(config);
  },
  leaveChatGroup: async (groupId: string) => {
    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/chat-groups/${groupId}/leave-chat`,
      headers: { Authorization: `Bearer ${token}` },
    };

    return handleRequest(config);
  },
  createChat: async (chatData: CreateChatGroup) => {
    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/chat-groups",
      data: chatData,
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log("service", chatData);
    return handleRequest(config);
  },
  updateChat: async (groupId: string, chatData: UpdateChatGroup) => {
    const config: AxiosRequestConfig = {
      method: "PUT",
      url: `/chat-groups/${groupId}`,
      data: chatData,
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log("update", groupId, chatData);
    return handleRequest(config);
  },
  getAllChats: async () => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/chat-groups",
      headers: { Authorization: `Bearer ${token}` },
    };

    return handleRequest(config);
  },
  getUpdatedGroup: async (groupId: string) => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/chat-groups/${groupId}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    return handleRequest(config);
  },
};
