import { z } from "zod";
import useAuthViewModel from "./auth.viewmodel";

export const loginSchema = z.object({
  email: z.string().nonempty("Insira um email.").email("Email inválido"),
  password: z.string().nonempty("Insira uma senha."),
});

export type LoginCredentials = z.infer<typeof loginSchema>;

export interface AuthActionState {
  error: null | string;
}
