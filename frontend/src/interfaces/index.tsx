import { FieldError } from "react-hook-form";

export interface InputProps {
  error?: FieldError;
  name: string;
  placeholder: string;
  clt?: string;
}
