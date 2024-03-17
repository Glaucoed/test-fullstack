"use client"

import { FiUser } from "react-icons/fi";
import Link from "next/link";

import CustomerList from "@/components/CustomerList";


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
        <CustomerList />
      </section>
    </main>
  );
}
