import { ChatGroup } from "../interface/chat-group.interface";

export function handleChangeChatGroups(prevRooms: ChatGroup[], room: ChatGroup): ChatGroup[] {
  const existingGroupIndex = prevRooms.findIndex(prevRoom => prevRoom.id === room.id);
  
  if (existingGroupIndex === -1) {
    return [...prevRooms, room];
  } else {
    const updatedRooms = [...prevRooms];
    updatedRooms[existingGroupIndex] = room;
    return updatedRooms;
  }
}