import { FiUser } from "react-icons/fi";
import Link from "next/link";

const clients = [
  {
    id: 1,
    nome: "João da Silva",
    email: "teste@teste.com.br",
    cpf: "123.456.789-00",
    telefone: "(11) 99999-9999",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "João da Silva",
    email: "teste@teste.com.br",
    cpf: "123.456.789-00",
    telefone: "(11) 99999-9999",
    status: "Inativo",
  },
];

export default function Home() {
  return (
    <main className="px-52 pt-32">
      <div className="flex gap-4 w-full border-b-2 border-zinc-200">
        <FiUser size={44} />
        <h1 className="text-4xl text-zinc-700 font-medium  pb-9">
          Painel de clientes
        </h1>
      </div>
      <section className="py-9 flex flex-col gap-3 text-gray-500">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Listagem de usuários</h2>
            <p className="text-lg text-gray-400">
              Escolha um cliente para visualizar os detalhes
            </p>
          </div>
          <div className="pr-10">
            <Link
              className="bg-uol-button hover:bg-transparent border-2 border-uol-button hover:text-uol-button px-4 py-2 text-base rounded-md text-white"
              href="/cadastro"
            >
              Novo cliente
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-between items-center border-2 border-zinc-200 p-6"
            >
              <div>
                <h3 className="text-xl font-semibold">{client.nome}</h3>
                <p className="text-lg">{client.email}</p>
              </div>
              <div>
                <p className="text-xl font-semibold">{client.cpf}</p>
                <p className="text-lg">{client.telefone}</p>
              </div>
              <div className="flex items-center gap-2 max-w-52 min-w-52">
                <span>
                  {(() => {
                    switch (client.status) {
                      case "Ativo":
                        return (
                          <div className="h-4 w-4 bg-green-600 rounded-full" />
                        );
                      case "Inativo":
                        return (
                          <div className="h-4 w-4 bg-red-700 rounded-full" />
                        );
                      case "Aguardando ativação":
                        return (
                          <div className="h-4 w-4 bg-yellow-600 rounded-full" />
                        );
                      default:
                        return (
                          <div className="h-4 w-4 bg-gray-300 rounded-full" />
                        );
                    }
                  })()}
                </span>
                <p className="text-xl">{client.status}</p>
              </div>
              <div>
                <Link
                  className="bg-transparent hover:bg-uol-button hover:text-white border-2 border-uol-button px-11 py-3 text-xl rounded-md text-uol-button"
                  href={`/cliente/${client.id}`}
                >
                  Editar
                </Link>
              </div>
            </div>
          ))}
          <span className="text-lg">
            Exibindo {clients.length} clientes
          </span>
        </div>
      </section>
    </main>
  );
}
