interface DropDownProps {
  dropDownActive: boolean;
}

export default function DropDown({ dropDownActive }: DropDownProps) {
  return (
    <div className="relative ">
      {dropDownActive && (
        <div className="absolute top-full right-0  bg-secondary-dark-bg shadow-lg py-1 rounded-md">
          <button className="text-gray-300 text-sm shadow-md p-2 px-4 hover:bg-zinc-700 block w-full text-center">
            Editar nome do Grupo
          </button>
          <button className="text-gray-300 text-sm shadow-md p-2 px-4 hover:bg-zinc-700 block w-full text-center">
            Mudar icone do Grupo
          </button>
          <button className="text-gray-300 text-sm shadow-md p-2 px-4 hover:bg-zinc-700 w-full text-center">
            Sair do Grupo
            <div className="relative">
              <div className="absolute top-full right-44  bg-secondary-dark-bg shadow-lg py-1 rounded-md">
                <button className="text-gray-300 text-sm hadow-md p-2 px-4 hover:bg-zinc-700 block w-full text-center">
                  Certeza que deseja sair do grupo?
                </button>
                <div className="flex gap-1">
                  <button className="text-gray-300 text-sm shadow-md p-2 px-4 rounded-lg bg-red-700 hover:bg-red-600 block w-full text-center">
                    Sim
                  </button>
                  <button className="text-gray-300 text-sm bg-zinc-500 shadow-md p-2 px-4 hover:bg-zinc-700 w-full text-center rounded-lg">
                    Não
                  </button>
                </div>
                <div className="px-24"></div>
              </div>
            </div>
          </button>
          <button className="text-gray-300 text-sm shadow-md p-2 px-4 hover:bg-zinc-700 block w-full text-center">
            Apagar Grupo
          </button>
          <div className="px-24"></div>
        </div>
      )}
    </div>
  );
}
