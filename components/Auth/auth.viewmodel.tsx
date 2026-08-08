import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, LoginCredentials } from "./auth.model";
import { loginUser } from "@/services/auth/auth.actions";

export default function useAuthViewModel() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const form = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginCredentials) => {
    setIsPending(true);
    setError(null);

    try {
      const result = await loginUser(data);
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Ocorreu um erro inesperado.");
    } finally {
      setIsPending(false);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    error,
    isPending,
  };
}
