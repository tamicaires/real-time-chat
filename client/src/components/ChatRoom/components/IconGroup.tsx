import { BsFillLaptopFill } from "react-icons/bs";

export default function IconGroup() {
  return (
    <div className="relative">
      {/* Div para criar o efeito de brilho nas bordas */}
      <div className="absolute inset-0 bg-violet-600 opacity-60 rounded-full filter brightness-125 blur-sm"></div>

      {/* Ícone dentro de uma div para aplicar o efeito de brilho */}
      <div className="relative z-10 p-3 bg-gradient-to-r text-gray-100 from-violet-400 via-indigo-600 to-violet-700 rounded-full">
        <BsFillLaptopFill size={22} />
      </div>
    </div>
  );
}
