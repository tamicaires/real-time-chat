import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex gap-2 items-center text-violet-600 hover:text-violet-400 border-t border-zinc-800 p-3 px-4">
      <span className="">
        <LuLogOut size={14} />
      </span>
      <span className="font-semibold" onClick={handleLogOut}>
        Sair
      </span>
    </div>
  );
}
