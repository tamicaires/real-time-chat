import { MouseEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isVisible: boolean;
  size?: string;
  children?: JSX.Element;
  onClose: () => void;
}

export default function Modal({
  isVisible,
  onClose,
  children,
  size,
}: ModalProps) {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className={`${
          !size ? "w-auto" : `w-[${size}px]`
        } flex flex-col relative`}
      >
        <button
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="bg-main-bg p-4 rounded-lg border border-zinc-800 text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
