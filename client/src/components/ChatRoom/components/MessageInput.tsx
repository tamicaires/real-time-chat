import { FormEvent, useState } from "react";
import { IoIosSend } from "react-icons/io";

interface MessageInputProps {
  onSubmit: (value: string) => void;
  isMyGroup: boolean | undefined;
  placeholder: string;
}

export default function MessageInput({
  onSubmit,
  placeholder,
  isMyGroup,
}: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`flex gap-3 items-center p-7 ${
          isMyGroup ? "" : "opacity-50"
        }`}
      >
        <input
          type="text"
          disabled={!isMyGroup}
          placeholder={placeholder}
          onChange={(event) => setInput(event.target.value)}
          value={input}
          className={`flex flex-grow p-2 px-4 text-gray-200 bg-secondary-dark-bg border border-gray-700 rounded-full focus:outline-none focus:border-violet-500`}
        />
        <div>
          <button
            type="submit"
            disabled={!isMyGroup}
            className={`bg-violet-700 text-white p-3 rounded-full ${
              isMyGroup ? "hover:bg-violet-800" : ""
            }`}
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </form>
  );
}
