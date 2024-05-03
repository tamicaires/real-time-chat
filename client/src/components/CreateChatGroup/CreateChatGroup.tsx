import Input from "../Form/Input";
import { useModalStore } from "../../store/showModal/showModal";
import { chatService } from "../../services/ChatService/chatService";
import {
  ChatGroup,
  CreateChatGroup,
} from "../../interface/chat-group.interface";
import Modal from "../Modal";
import avatarSelect from "../../assets/avatarSelect.svg";
import { createChatGroupSchema } from "./createChatGroupSchema";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";

type CreateChatGroupData = z.infer<typeof createChatGroupSchema>;

export default function CreateChatGroups() {
  const { showModal, setShowModal } = useModalStore();

  const createChatGroupForm = useForm<CreateChatGroupData>({
    resolver: zodResolver(createChatGroupSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createChatGroupForm;

  const handleCreateGroup = async (data: CreateChatGroup) => {
    const chatData = {
      name: data.name,
      description: data.description,
    };

    try {
      const chatGroup: ChatGroup = await chatService.createChat(chatData);
      await chatService.addUserToChat(chatGroup.id);
      setShowModal(false);
    } catch {
      message.error("Erro ao criar o grupo.");
    }
  };

  return (
    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div className="flex flex-col gap-3 justify-center content-center w-[350px] bg-main-bg p-4 rounded-lg">
        <header className="flex flex-col pb-1">
          <span className="text-base text-center text-gray-200 font-semibold">
            Novo grupo
          </span>
        </header>
        <FormProvider {...createChatGroupForm}>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleCreateGroup)}
          >
            <div className="flex justify-center">
              <img
                src={avatarSelect}
                alt="Chat Logo"
                className="h-40 hover:bg-main-bg hover:opacity-60"
              />
            </div>
            <Input name="name" placeholder="Digite o nome do grupo" />

            <Input
              name="description"
              placeholder="Descrição do grupo (opcional)"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-violet-700 text-sm text-white font-semibold p-3 rounded-xl uppercase hover:bg-violet-800"
            >
              Criar Grupo
            </button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
