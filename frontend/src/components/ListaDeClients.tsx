"use client"
import { IClient } from '@/interfaces';
import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'

export default function ListaDeClients() {

  async function fetchTodosClientes() {
    const response = await api.get("http://localhost:3001/users");
    return response.data as IClient[];
  }

  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: fetchTodosClientes,
  })

  return (
    <div className="flex flex-col gap-8 py-6">
          {clients?.map((client) => (
            <div
              key={client.id}
              className="flex justify-between items-center border-2 border-zinc-200 p-6"
            >
              <div className="min-w-[37.5rem]">
                <h3 className="text-xl font-semibold">{client.name}</h3>
                <p className="text-lg">{client.email}</p>
              </div>
              <div>
                <p className="text-xl font-semibold">{client.cpf}</p>
                <p className="text-lg">{client.phone}</p>
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
            Exibindo { clients ? clients.length : 0 } clientes
          </span>
        </div>
  )
}
