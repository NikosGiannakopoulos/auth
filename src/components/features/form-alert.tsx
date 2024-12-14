import { cn } from "@/lib/utils";
import { FiCheckCircle } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";

interface FormAlertProps {
  type: "error" | "success";
  message?: string;
}

const FormAlert = ({ type, message }: FormAlertProps) => {
  if (!message) return null;

  const isError = type === "error";

  return (
    <div
      className={cn(
        "p-3 rounded-md flex items-center gap-x-2 text-sm",
        isError
          ? "bg-destructive/15 text-destructive"
          : "bg-emerald-500/15 text-emerald-500"
      )}
    >
      {isError ? (
        <FiAlertTriangle className='h-4 w-4' />
      ) : (
        <FiCheckCircle className='h-4 w-4' />
      )}
      <span>{message}</span>
    </div>
  );
};

export default FormAlert;
