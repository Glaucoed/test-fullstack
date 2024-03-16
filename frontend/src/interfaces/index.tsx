import { FieldError } from "react-hook-form";

export interface InputProps {
  error?: FieldError;
  name: string;
  placeholder: string;
  clt?: string;
}

export interface IClient {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  status: string;
}