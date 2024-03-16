import { InputProps } from "@/interfaces";
import { useFormContext } from "react-hook-form";


export default function Input({ error, name, placeholder, clt }: InputProps) {
  const methods = useFormContext();
  return (
    <div>
      <input
        className={`border-2 rounded-md w-full py-3 text-xl px-3 focus:outline-none focus:bg-gray-100 focus:shadow-outline ${
          error?.message ? "border-red-500" : "border-zinc-300"
        }`}
        id={name}
        type="text"
        placeholder={placeholder}
        {...methods.register(`${name}`)}
        defaultValue={clt ? clt : methods.watch(name)}
      />
        {error && <p className="text-red-500 text-sm pl-2 pt-2">{error.message}</p>}
      </div>
  );
}
