import { FieldError } from "react-hook-form";

export interface IClient {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  status: string;
  
}

export interface InputProps {
  error?: FieldError;
  name: string;
  placeholder: string;
  clt?: string;
}
