/* eslint-disable @typescript-eslint/no-explicit-any */
import { RiAlertFill } from "react-icons/ri";

interface ErrorMessageProps {
  message?: string;
}
export default function ApiErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-1 text-xs text-red-500">
      <span>
        <RiAlertFill size={10} />
      </span>
      <span> {message}</span>
    </div>
  );
}
