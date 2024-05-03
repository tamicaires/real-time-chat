import { useCurrentChatGroupStore } from "../../../store/currentChatGroup/currentChatGroup";
import { BsThreeDotsVertical } from "react-icons/bs";
import chatprofile1 from "../../../assets/chatGroupProfiles/chatProfile1.svg";
import { useState } from "react";
import UpdateChatGroups from "../../UpdateChatGroup/UpdateChatGroup";
import { Container } from "../../DropDown/Container";
import { Field } from "../../DropDown/Field";
import { Children } from "../../DropDown/Children";
import { useDropDownStore } from "../../../store/dropDown/dropDown";
import { useModalStore } from "../../../store/showModal/showModal";

export default function RoomHeader() {
  const { currentChatGroup } = useCurrentChatGroupStore();
  const [activeDropDown, setActiveDropDown] = useState(false);

  const { activeField, setActiveField } = useDropDownStore();
  const { setEditModal } = useModalStore();
  
  return (
    <div className="flex justify-between items-center p-4 border-b-1 border-gray-800">
      <div className="flex gap-5 ml-50">
        <div>
          <img src={chatprofile1} alt="Chat Logo" className="h-12" />
        </div>
        <header className="flex flex-col">
          <span className="text-lg text-gray-200 font-semibold">
            {currentChatGroup?.name}
          </span>
          <span className="text-sm text-gray-400">
            {currentChatGroup?.description}
          </span>
        </header>
      </div>
      <div className="flex gap-1">
        <Container dropDownActive={activeDropDown}>
          <div>
            <Field text="Editar grupo" onClick={() => setEditModal(true)} />
            <Field
              text="Sair do grupo"
              onClick={() => setActiveField(!activeField)}
              isActive={activeField}
            >
              <Children text="Certeza que deseja sair?" />
            </Field>
          </div>
        </Container>
        <button
          onClick={() => setActiveDropDown(!activeDropDown)}
          className="bg-secondary-dark-bg text-violet-600 rounded-full px-1.5 py-2 hover:bg-zinc-800"
        >
          <BsThreeDotsVertical size={17} />
        </button>
      </div>
      <UpdateChatGroups />
    </div>
  );
}
