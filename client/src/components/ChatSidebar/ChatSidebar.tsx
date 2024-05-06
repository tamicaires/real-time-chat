/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ChatGroupCard from "./components/ChatGroupCard";
import { useCurrentChatGroupStore } from "../../store/currentChatGroup/currentChatGroup";
import { ChatGroup } from "../../interface/chat-group.interface";
import { clientSocket } from "../../services/clientSocket";
import { chatService } from "../../services/ChatService/chatService";
import { message } from "antd";
import Header from "./components/Header";
import Logout from "./components/Logout";
import CreateChatGroups from "../CreateChatGroup/CreateChatGroup";
import { useNavigate } from "react-router-dom";
import { useActiveFilterChatStore } from "../../store/filterChatBar/filterChatBar";
import { handleChangeChatGroups } from "../../utils/utils";

export default function ChatSidebar() {
  const { activeFilterChatBar } = useActiveFilterChatStore();
  const { setCurrentChatGroup } = useCurrentChatGroupStore();
  const [chatGroups, setChatGroups] = useState<ChatGroup[]>([]);
  const [filteredChatGroups, setFilteredChatGroups] = useState<ChatGroup[]>([]);
  const [socket] = useState(clientSocket());

  const navigate = useNavigate();

  const fetchChatGroups = async () => {
    try {
      const response = await chatService.getAllChats();
      setChatGroups(response);
    } catch (error) {
      console.error("Erro ao buscar chat rooms:", error);
      message.error("Erro ao buscar as salas de mensagens");
    }
  };

  useEffect(() => {
    fetchChatGroups();
  }, []);

  useEffect(() => {
    socket.on("chat-room", (room: ChatGroup) => {
      setChatGroups((prevRooms: ChatGroup[]) =>
        handleChangeChatGroups(prevRooms, room)
      );
    });

     return () => {
      socket.off("chat-room");
    };
  }, [socket]);

  useEffect(() => {
    const updatedFilteredChatGroups: ChatGroup[] = activeFilterChatBar
      ? chatGroups.filter((group) => group.isMyGroup === true)
      : chatGroups.filter((group) => group.isMyGroup === false);

    setFilteredChatGroups(updatedFilteredChatGroups);
  }, [activeFilterChatBar, chatGroups]);

  const handleGroupClick = (group: ChatGroup) => {
    setCurrentChatGroup(group);
    navigate(`/chat/${group.id}`);
  };

  return (
    <div className="flex flex-col h-full bg-main-bg min-h-screen">
      <Header />
      <div className="p-4 border-r border-gray-800 overflow-y-auto">
        <div className="flex flex-col ">
          <main>
            {filteredChatGroups.length === 0 ? (
              <div className="text-center text-gray-300 text-sm">
                Nenhum grupo disponivel
              </div>
            ) : (
              filteredChatGroups.map((group, index) => (
                <ChatGroupCard
                  key={index}
                  isSelected={true}
                  group={group}
                  onClick={() => handleGroupClick(group)}
                />
              ))
            )}
          </main>
        </div>
      </div>
      <Logout />
      <CreateChatGroups />
    </div>
  );
}
