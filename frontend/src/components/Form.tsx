"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/Input";
import Link from "next/link";
import { IClient } from "@/interfaces";

export default function Form({ client }: { client?: IClient }) {
  const SignInSchema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório"),
    telefone: yup.string().required("Telefone é obrigatório"),
    status: yup.string().required("Status é obrigatório"),
  });

  const methods = useForm({
    resolver: yupResolver(SignInSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  async function onSubmitClient(data: SubmitHandler<IClient>) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitClient as SubmitHandler<FieldValues>)}
        className="flex flex-col gap-5 w-[16.875rem] pt-11"
      >
        <Input
          error={errors.nome}
          name="nome"
          placeholder="Nome"
          clt={client?.nome}
        />
        <Input
          error={errors.email}
          name="email"
          placeholder="Email"
          clt={client?.email}
        />
        <Input
          error={errors.cpf}
          name="cpf"
          placeholder="CPF"
          clt={client?.cpf}
        />
        <Input
          error={errors.telefone}
          name="telefone"
          placeholder="Telefone"
          clt={client?.telefone}
        />
        <Input
          error={errors.status}
          name="status"
          placeholder="Status"
          clt={client?.status}
        />

        <div className="flex gap-4 pt-14">
          <button
            className="bg-uol-button hover:bg-transparent border-2 border-uol-button hover:text-uol-button px-12 py-3 text-xl rounded-md text-white"
            type="submit"
          >
            Criar
          </button>
          <Link
            className="bg-transparent hover:bg-uol-button hover:text-white border-2 border-uol-button px-11 py-3 text-xl rounded-md text-uol-button"
            href="/"
          >
            Voltar
          </Link>
        </div>
      </form>
    </FormProvider>
  );
}