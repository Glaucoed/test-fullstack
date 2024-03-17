"use client";

import { useRouter } from "next/navigation";
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
import { IClient, IClientList } from "@/interfaces";
import { api } from "@/services/api";
import { maskCPF, maskPhone } from "../utils/maskInput";

export default function Form({ 
  client 
}: { 
  client?: IClientList 
}) {

  const SignInSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório").matches(/^\d{3}.?\d{3}.?\d{3}\-?\d{2}$/, "CPF inválido"),
    phone: yup.string().required("Telefone é obrigatório").matches(/^\(\d{2}\) \d{4}-\d{4}$/, "Digite um número de telefone válido"),
    status: yup.string().required("Status é obrigatório").oneOf(["Ativo", "Inativo", "Desativado", "Aguardando ativação"], "Selecione uma opção válida"),
  });

  const methods = useForm({ resolver: yupResolver(SignInSchema) });
  const { handleSubmit, reset, setValue, formState: { errors } } = methods;

  const router = useRouter();

  async function onUpdateClient(data: SubmitHandler<IClientList>) {
    try {
      await api
        .put(`http://localhost:3001/users/${client?.id}`, data)
        .then((response) => {
          if (response.status === 200) {
            reset();
            router.push("/");
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function onRegisterClient(data: SubmitHandler<IClient>) {
    try {
      await api.post("http://localhost:3001/users", data).then((response) => {
        if (response.status === 201) {
          reset();
          router.push("/");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function onSubmitClient(data: SubmitHandler<IClient>) {
    client ? onUpdateClient(data) : onRegisterClient(data);
  }

  function handleSetMask(value: string, name: keyof IClient) {
    console.log(value, name);
    setValue(name, value);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitClient as SubmitHandler<FieldValues>)}
        className="flex flex-col gap-5 w-[16.875rem] pt-11"
      >
        <Input
          error={errors.name}
          name="name"
          placeholder="Nome"
          clt={client?.name}
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
          onChange={(e) => handleSetMask(maskCPF(e.target.value), "cpf")}
        />
        <Input
          error={errors.phone}
          name="phone"
          placeholder="Telefone"
          clt={client?.phone}
          onChange={(e) => handleSetMask(maskPhone(e.target.value), "phone")}
        />

        <div>
          <select
            className="border-2 rounded-md w-full py-3 text-xl px-3 focus:outline-none focus:bg-gray-100 focus:shadow-outline border-zinc-300"
            {...methods.register("status")}
            defaultValue={client?.status}
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Inativo">Inativo</option>
            <option value="Desativado">Desativado</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm pl-2 pt-2">
              {errors?.status.message}
            </p>
          )}
        </div>

        <div className="flex gap-4 pt-14">
          <button
            className="bg-uol-button hover:bg-transparent border-2 border-uol-button hover:text-uol-button px-12 py-3 text-xl rounded-md text-white"
            type="submit"
          >
            {client ? "Atualizar" : "Criar"}
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
