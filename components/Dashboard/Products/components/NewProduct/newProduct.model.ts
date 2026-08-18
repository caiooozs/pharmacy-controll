import { useCreateProductViewModel } from "./newProduct.viewmodel";
import { z } from "zod";

export const newProductSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  quantity: z
    .number({ message: "Quantidade é obrigatória" })
    .int("Quantidade deve ser um número inteiro")
    .min(0, "Quantidade não pode ser negativa"),
  validity: z.string().min(1, "Validade é obrigatória"),
  category: z
    .number({ message: "Selecione uma categoria" })
    .min(1, "Selecione uma categoria"),
});

export type NewProductForm = z.infer<typeof newProductSchema>;

export type NewProductViewProps = ReturnType<typeof useCreateProductViewModel>;
