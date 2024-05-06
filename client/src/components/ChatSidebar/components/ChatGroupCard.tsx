import { ChatGroup } from "../../../interface/chat-group.interface";
import chatprofile1 from "../../../assets/chatGroupProfiles/chatProfile1.svg";
import { format } from "date-fns";

interface ChatGroupCardProps {
  isSelected: boolean;
  group: ChatGroup;
  onClick: () => void;
}

export default function ChatGroupCard({
  isSelected,
  group,
  onClick,
}: ChatGroupCardProps) {
  const sentLastMessageFormatted = group.sentLastMessage
    ? format(new Date(group.sentLastMessage), "HH:mm")
    : "";
  const createdAtFormatted = group.createdAt
    ? format(new Date(group.createdAt), "dd/MM/yy HH:mm")
    : "";
  const formattedDate = group.sentLastMessage
    ? sentLastMessageFormatted
    : createdAtFormatted;

  return (
    <div
      className={`flex gap-4 my-2 py-5 px-4 border-b-1 bg-secondary-dark-bg border-zinc-800 items-center rounded-lg hover:bg-tertiary-dark-bg shadow-zinc-900 ${
        isSelected ? "shadow-lg bg-gray-100" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <span className="text-violet-700">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img
                src={chatprofile1}
                alt="Chat profile"
                className="h-full w-full"
              />
            </div>
          </span>

          <div>
            <h3 className="text-md text-gray-200 font-semibold truncate">
              {group.name}
            </h3>{" "}
            {group.isMyGroup ? (
              <div className="marker:flex gap-2 text-[13px] text-gray-400 pt-2 ">
                <span className="truncate font-semibold">
                  {group.sender ? `${group.sender}:` : "Nenhuma Mensagem"}
                </span>{" "}
                <span className="truncate">{group.lastMessage ?? ""}</span>{" "}
              </div>
            ) : (
              <div className="flex gap-2 text-[13px] text-gray-400 pt-2 pr-20">
                <span className="truncate">Criado em {createdAtFormatted}</span>{" "}
              </div>
            )}
          </div>
        </div>
        {group.isMyGroup ? (
          <div className="flex flex-col items-start pl-2">
            <div className="text-gray-400 text-xs px-1.5 mb-8">
              {formattedDate}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
