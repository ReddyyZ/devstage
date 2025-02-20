import { ComponentProps } from "react";
import { Mail } from "lucide-react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group data-[error=true]:border-danger flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 text-gray-400 transition-colors duration-150 focus-within:border-gray-100"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="group-data-[error=true]:text-danger text-gray-400 group-focus-within:text-gray-100 group-[&:not(has(input:placeholder-shown))]:text-gray-100"
      {...props}
    >
      <Mail />
    </span>
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return <input className="h-full w-full text-gray-100 outline-0" {...props} />;
}
