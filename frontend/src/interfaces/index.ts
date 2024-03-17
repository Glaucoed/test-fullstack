import { FieldError } from "react-hook-form";

export interface IClient {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
  
}

export interface InputProps {
  error?: FieldError;
  name: string;
  placeholder: string;
  clt?: string;
}
