import React from "react";
import { useActiveFilterChatStore } from "../../../store/filterChatBar/filterChatBar";

const FilterChatBar: React.FC = () => {
  const { activeFilterChatBar, setActiveFilterChatBar } =
    useActiveFilterChatStore();

  return (
    <div className="flex justify-center items-center"> 
      <button
        onClick={() => setActiveFilterChatBar(true)}
        className={`text-xs font-medium rounded-l-full p-3 px-6 ${
          activeFilterChatBar
            ? "bg-violet-600 hover:bg-violet-700 text-white"
            : "bg-secondary-dark-bg hover:bg-tertiary-dark-bg text-gray-100"
        }`}
      >
        Meus Grupos
      </button>
      <button
        onClick={() => setActiveFilterChatBar(false)}
        className={`text-xs font-medium rounded-r-full p-3 px-4 ${
          !activeFilterChatBar
            ? "bg-violet-600 hover:bg-violet-700 text-white"
            : "bg-secondary-dark-bg hover:bg-tertiary-dark-bg text-gray-100"
        }`}
      >
        Buscar
      </button>
    </div>
  );
};

export default FilterChatBar;
