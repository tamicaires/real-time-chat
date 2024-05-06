import { useEffect, useRef, useState } from "react";
import { message } from "antd";
import { messageService } from "../../services/MessageService/messageService";
import { useCurrentChatGroupStore } from "../../store/currentChatGroup/currentChatGroup";
import MessageInput from "./components/MessageInput";
import ConversationBubble from "./components/ConversationBubble";
import { clientSocket } from "../../services/clientSocket";
import {
  ChatMessage,
  CreateChatMessage,
} from "../../interface/chat-message.interface";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import RoomHeader from "./components/RoomHeader";
import { ChatGroup } from "../../interface/chat-group.interface";
import { chatService } from "../../services/ChatService/chatService";
import { useDropDownStore } from "../../store/dropDown/dropDown";

export default function ChatRoom() {
  const { currentChatGroup, setCurrentChatGroup } = useCurrentChatGroupStore();
  const { activeField, setActiveField } = useDropDownStore();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [username, setUsername] = useState("");

  const [socket] = useState(clientSocket());

  const user = getUserLocalStorage();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    if (currentChatGroup) {
      setSelectedId(currentChatGroup.id);
    }
  }, [currentChatGroup]);

  const dummy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("message", (message) => {
      if (message.chatGroupId === selectedId) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off("message");
    };
  }, [socket, selectedId]);

  useEffect(() => {
    if (selectedId) {
      const fetchInitialMessages = async () => {
        try {
          const response = await messageService.getChatMessages(selectedId);
          setMessages(response);
        } catch (error) {
          console.error("Erro ao buscar as mensagens:", error);
          message.error("Erro ao buscar as mensagens");
        }
      };

      fetchInitialMessages();
    }
  }, [selectedId]);

  useEffect(() => {
    if (selectedId) {
      const handleChatGroupUpdate = (updatedGroup: ChatGroup) => {
        if (updatedGroup.id === selectedId) {
          setCurrentChatGroup(updatedGroup);
        }
      };

      socket.on("chat-room", handleChatGroupUpdate);

      return () => {
        socket.off("chat-room");
      };
    }
  }, [selectedId, setCurrentChatGroup, socket]);

  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  const handleSubmit = async (inputValue: string) => {
    const newMessage: CreateChatMessage = {
      text: inputValue,
      chatGroupId: selectedId,
    };

    try {
      const receiveData = await messageService.sendMessage(newMessage);
      socket.emit("message", receiveData);
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      message.error("Erro ao enviar a mensagem");
    }
  };

  const handleJoinChat = async () => {
    try {
      await chatService.addUserToChat(selectedId);

      const updatedGroup = await chatService.getUpdatedGroup(selectedId);
      console.log("updated grupo", updatedGroup);
      message.success("Bem-vindo ao grupo!");
    } catch (error) {
      message.error(
        "Não foi possivel entrar no grupo, tente novamente mais tarde!"
      );
      console.log("Não foi possivel entrar no grupo", error);
    }
  };

  const handleLeaveChat = async () => {
    try {
      await chatService.leaveChatGroup(selectedId);
      await chatService.getUpdatedGroup(selectedId);
      setActiveField(!activeField);
      setSelectedId("");
    } catch (error) {
      console.log("Error on leave group:", error);
    }
  };

  return (
    <div className="max-w-full flex flex-col bg-main-bg  h-screen b">
      <div className="ml-7">
        <RoomHeader onLeaveChat={handleLeaveChat} />
      </div>

      {currentChatGroup ? (
        currentChatGroup.isMyGroup ? (
          <div className="flex flex-col bg-main-bg flex-grow overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-4">
                Nenhuma mensagem
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === username
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <ConversationBubble
                    message={message.text}
                    username={message.sender}
                    fromMe={message.sender === username}
                    sendAt={message.createdAt}
                  />
                </div>
              ))
            )}
            <div ref={dummy}></div>
          </div>
        ) : (
          <div className="flex flex-grow justify-center items-center">
            <div className="flex flex-col items-center gap-3 pl-6">
              <span className="text-white text-lg font-bold">
                Você não faz parte deste grupo.
              </span>

              <button
                onClick={handleJoinChat}
                className="bg-violet-700 hover:bg-violet-800 text-gray-200 text-sm text-center px-4 py-1 mb-8 rounded-md uppercase font-semibold"
              >
                Entrar no grupo
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="text-center text-gray-500 mt-4">
          Não tem grupo selecionado
        </div>
      )}

      <div>
        <MessageInput
          onSubmit={handleSubmit}
          placeholder="Digite sua mensagem aqui"
          isMyGroup={currentChatGroup?.isMyGroup}
        />
      </div>
    </div>
  );
}
