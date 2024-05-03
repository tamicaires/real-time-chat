import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import chatLogo from "../../assets/chat-logo.svg";

export default function NotFound() {
  return (
    <div className="bg-exception-pattern h-screen bg-cover bg-no-repeat flex flex-col justify-between p-10">
      <div className="flex justify-center items-center gap-3">
        <img src={chatLogo} alt="Chat Logo" className="h-10" />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-violet-700 text-[150px] text-center font-extrabold mb-[-2rem]">
            404
          </h1>
          <p className="text-gray-300 text-center text-3xl font-semibold">
            Oops, você está perdido?
          </p>
          <p className="text-gray-300 text-center text-2xl">
            Não conseguimos encontrar a página que está buscando
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-gray-300 text-sm bg-violet-700 hover:bg-violet-800 font-semibold uppercase p-4 rounded-full">
            Voltar para o chat
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-3 items-center">
        <a
          href="https://www.instagram.com/tami.code/"
          target="_blank"
          className="text-gray-300 bg-violet-700 hover:bg-violet-800 p-2 rounded-full"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/tamicaires"
          target="_blank"
          className="text-gray-300 bg-violet-700 hover:bg-violet-800 p-2  rounded-full"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
}
