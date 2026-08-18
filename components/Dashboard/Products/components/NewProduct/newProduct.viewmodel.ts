"use client";

import { useCreateStock } from "@/features/stock/Mutations/useCreateStock";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { NewProductForm, newProductSchema } from "./newProduct.model";

export const useCreateProductViewModel = () => {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateStock();

  const form = useForm<NewProductForm>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      quantity: 0,
      validity: "",
      category: undefined,
    },
  });

  // A categoria vem do <CategorySelect> (componente controlado), então o campo
  // é registrado aqui em vez de exigir um <Controller> na view.
  const { field: categoryField } = useController({
    control: form.control,
    name: "category",
  });

  const submit = (values: NewProductForm) => {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        setOpen(false);
      },
    });
  };

  return {
    form,
    onSubmit: form.handleSubmit(submit),
    open,
    setOpen,
    isPending,
    categoryValue: categoryField.value ?? null,
    onCategoryChange: categoryField.onChange,
  };
};
