import { format } from "date-fns";
import avatar2 from "../../../assets/avatars/avatar2.svg";
import avatar1 from "../../../assets/avatars/avatar1.svg";

interface ConversationBubbleProps {
  fromMe: boolean;
  message: string;
  username: string;
  sendAt: Date;
}

export default function ConversationBubble({
  fromMe,
  message,
  username,
  sendAt,
}: ConversationBubbleProps) {
  const formattedDate = format(sendAt, "HH:mm");

  return (
    <div
      className={`flex gap-2 items-end p-8 ${
        fromMe ? "justify-end" : "justify-start"
      }`}
    >
      {!fromMe ? (
        <>
          <div className="">
            <img src={avatar2} alt="Chat Logo" className="h-10 rounded-full" />
          </div>
          <div className="">
            <div className="flex gap-3 items-center pb-1 ">
              <span className="text-xs text-gray-200 ml-4 font-semibold">
                {username}
              </span>
              <div className="text-[11px] text-end text-gray-400">
                {formattedDate}
              </div>
            </div>
            <div className="flex gap-4 text-gray-300 bg-secondary-dark-bg px-6 py-3 rounded rounded-r-3xl rounded-tl-3xl rounded-bl-none">
              <span>{message}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <div className="flex gap-3 items-center pb-1">
              <span className="text-xs text-gray-200 ml-4 font-semibold">
                {username}
              </span>
              <div className="text-[11px] text-end text-gray-400">
                {formattedDate}
              </div>
            </div>
            <div
              className={`flex gap-4 text-gray-200 bg-violet-700 px-6 py-3 rounded rounded-l-3xl rounded-tr-3xl rounded-br-none`}
            >
              <span>{message}</span>
            </div>
          </div>
          <div className="">
            <img src={avatar1} alt="Chat Logo" className="h-10 rounded-full" />
          </div>
        </>
      )}
    </div>
  );
}
