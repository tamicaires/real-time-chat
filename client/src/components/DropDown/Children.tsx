import { useDropDownStore } from "../../store/dropDown/dropDown";

interface ChildrenProps {
  text: string;
}

export function Children({ text }: ChildrenProps) {
  const { setActiveField } = useDropDownStore();
  return (
    <div className="relative ">
      <div className="absolute top-0 right-44  bg-secondary-dark-bg shadow-lg py-1 rounded-md">
        <button className="text-gray-300 text-sm shadow-md p-2 px-4  block w-full text-center">
          {text}
        </button>
        <div className="flex gap-1 pt-1 border-t border-zinc-700">
          <button className="text-gray-300 text-sm shadow-md p-2 px-4 rounded-lg bg-red-700 hover:bg-red-600 block w-full text-center">
            Sim
          </button>
          <button
            onClick={() => setActiveField(false)}
            className="text-gray-300 text-sm bg-zinc-500 shadow-md p-2 px-4 hover:bg-zinc-700 w-full text-center rounded-lg"
          >
            Não
          </button>
        </div>
        <div className="px-24"></div>
      </div>
    </div>
  );
}
