"use client"

import Form from '@/components/Form'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { useParams } from "next/navigation"
import { useQuery } from '@tanstack/react-query'

const clients = [
  {
    id: 1,
    nome: "João da Silva",
    email: "teste@teste.com.br",
    cpf: "123.456.789-00",
    telefone: "(11) 99999-9999",
    status: "Ativo",
  },
];

export default function UpdateCliente() {

  const { id } = useParams();

  async function fetchClientFindById() {
    // const response = await fetch(`http://localhost:3000/api/cliente/${id}`);
    // const data = await response.json();
    return clients[0];
  }

  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchClientFindById,
  })


  
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
        <Form client={ data } />        
      </section>
    </main>
  )
}
