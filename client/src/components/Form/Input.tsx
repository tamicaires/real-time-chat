import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  type?: string | "submit";
  placeholder?: string;
  hasApiError?: boolean;
}

export default function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  const hasValidationError = errors && errors[props.name];
  const hasError = hasValidationError || props.hasApiError;
  return (
    <div className="pt-2">
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`flex-grow rounded-xl shadow-sm text-sm px-4 py-2.5 bg-main-bg border ${
          hasError ? "border-red-500" : "border-zinc-700"
        } text-gray-200 focus:outline-none  focus:bg-main-bg focus:ring-violet-500 focus:border-violet-500 w-full`}
        {...register(props.name)}
        {...props}
      />
    </div>
  );
}
