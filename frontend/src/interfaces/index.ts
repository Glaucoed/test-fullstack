import { FieldError } from "react-hook-form";

export interface IClient {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
  
}

export interface IClientList extends IClient {
  id: number;
}

export interface InputProps {
  error?: FieldError;
  name: string;
  placeholder: string;
  clt?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
