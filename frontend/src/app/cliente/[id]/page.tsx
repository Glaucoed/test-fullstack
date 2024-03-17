"use client"

import Form from '@/components/Form'
import React, { useEffect } from 'react'
import { FiUser } from 'react-icons/fi'
import { useParams } from "next/navigation"
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'

export default function UpdateCliente() {

  const { id } = useParams();

  async function fetchClientFindById() {

    const response = await api.get(`/users/${id}`);
    return response.data;
    
  }

  const { data: cliente } = useQuery({
    queryKey: ['uniqueClient', id],
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
        <h2 className="text-2xl font-semibold">{cliente ? "Atualizar usuário" : "Novo usuário"}</h2>
        <p className="text-lg text-gray-400">
          Informe os campos a seguir para criar novo usuário:
        </p>
        {cliente && <Form cliente={cliente} />} 
      </section>
    </main>
  )
}
