import Form from "@/components/Form";
import { FiUser } from "react-icons/fi";

export default function Cadastro() {

  return (
    <main className="px-52 pt-32">
      <div className="flex gap-4 w-full border-b-2 border-zinc-200">
        <FiUser size={44} />
        <h1 className="text-4xl text-zinc-700 font-medium  pb-9">
          Painel de clientes
        </h1>
      </div>
      <section className="py-9 flex flex-col gap-3 text-gray-500">
        <h2 className="text-2xl font-semibold">Novo usuário</h2>
        <p className="text-lg text-gray-400">
          Informe os campos a seguir para criar novo usuário:
        </p>
        <Form />        
      </section>
    </main>
  );
}
