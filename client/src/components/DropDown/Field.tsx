import React from "react";

interface FieldProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
}

export function Field({ text, onClick, isActive, children }: FieldProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-gray-300 text-sm hadow-md p-2 px-4 hover:bg-zinc-700 block w-full text-center relative"
      >
        {text}
      </button>
      {isActive && children}
    </div>
  );
}
