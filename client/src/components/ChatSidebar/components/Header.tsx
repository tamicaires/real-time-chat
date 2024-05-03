import { IoAdd } from "react-icons/io5";
import FilterChatBar from "./FilterChatBar";
import { useModalStore } from "../../../store/showModal/showModal";
import chatLogo from "../../../assets/chat-logo.svg";

const Header = () => {
  const { setShowModal } = useModalStore();
  return (
    <div className="flex flex-col justify-center p-4">
      <header className="flex justify-between items-center p-3 mb-4 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <img src={chatLogo} alt="Chat Logo" className="h-10" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm text-gray-200 bg-violet-600 hover:bg-violet-700 p-1 rounded-full"
        >
          <IoAdd size={20} />
        </button>
      </header>
      <nav className="flex justify-center items-center rounded-full">
        <FilterChatBar />
      </nav>
    </div>
  );
};

export default Header;
