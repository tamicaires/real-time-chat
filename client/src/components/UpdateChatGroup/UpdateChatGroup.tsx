import Input from "../Form/Input";
import { useModalStore } from "../../store/showModal/showModal";
import { chatService } from "../../services/ChatService/chatService";
import Modal from "../Modal";
import avatarSelect from "../../assets/avatarSelect.svg";
import { updateChatGroupSchema } from "./updateChatGroupSchema";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";
import { useCurrentChatGroupStore } from "../../store/currentChatGroup/currentChatGroup";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CreateChatGroup } from "../../interface/chat-group.interface";

type UpdateChatGroupData = z.infer<typeof updateChatGroupSchema>;

export default function UpdateChatGroups() {
  const { editModal, setEditModal } = useModalStore();
  const { currentChatGroup } = useCurrentChatGroupStore();
  const { roomId } = useParams();
  const roomIdValue = roomId ?? "";

  const updateChatGroupForm = useForm<UpdateChatGroupData>({
    resolver: zodResolver(updateChatGroupSchema),
    defaultValues: currentChatGroup ?? {},
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = updateChatGroupForm;

  useEffect(() => {
    reset(currentChatGroup ?? {});
  }, [currentChatGroup, reset]);

  const handleUpdateGroup = async (data: CreateChatGroup) => {
    const chatData = {
      name: data.name,
      description: data.description,
    };

    try {
      await chatService.updateChat(roomIdValue, chatData);
      setEditModal(false);
    } catch {
      message.error("Erro ao editar o grupo.");
    }
  };

  return (
    <Modal isVisible={editModal} onClose={() => setEditModal(false)}>
      <div className="flex flex-col gap-3 justify-center content-center w-[350px] bg-main-bg p-4 rounded-lg">
        <header className="flex flex-col pb-1">
          <span className="text-base text-center text-gray-200 font-semibold">
            Editar grupo
          </span>
        </header>
        <FormProvider {...updateChatGroupForm}>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleUpdateGroup)}
          >
            <div className="flex justify-center">
              <img
                src={avatarSelect}
                alt="Chat Logo"
                className="h-40 hover:bg-main-bg hover:opacity-60"
              />
            </div>
            <Input type="text" name="name" />

            <Input
              name="description"
              placeholder="Descrição do grupo (opcional)"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-violet-700 text-sm text-white font-semibold p-3 rounded-xl uppercase hover:bg-violet-800"
            >
              Editar
            </button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
