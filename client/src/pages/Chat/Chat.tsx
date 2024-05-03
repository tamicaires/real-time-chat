import { FiMenu } from "react-icons/fi";
import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import ChatRoom from "../../components/ChatRoom/ChatRoom";
import { useSidebarStore } from "../../store/sidebarOpen/sidebarOpen";

export default function Chat() {
  const { isSidebarOpen, setSidebarOpen } = useSidebarStore();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-full flex p-2 w-full fixed bg-main-bg">
      <div className="sm:hidden mr-[10] fixed">
        <button onClick={toggleSidebar} className="text-gray-300 py-4 px-1">
          <FiMenu size={24} />
        </button>
      </div>

      <div className={`w-auto ${isSidebarOpen || "hidden"} sm:block`}>
        <ChatSidebar />
      </div>

      <div className="w-full sm:w-3/4">
        <ChatRoom />
      </div>
    </div>
  );
}
