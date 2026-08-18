"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import CategorySelect from "../CategorySelect/categorySelect";
import { NewProductViewProps } from "./newProduct.model";

const NewProductView = ({
  form,
  onSubmit,
  open,
  setOpen,
  isPending,
  categoryValue,
  onCategoryChange,
}: NewProductViewProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        <Plus />
        Adicionar Produto
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Produto</DialogTitle>
          <DialogDescription>
            Preencha os dados do medicamento para cadastrá-lo no estoque.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="name">
              Nome
            </label>
            <Input
              id="name"
              placeholder="Ex.: Dipirona 500mg"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="quantity">
              Quantidade
            </label>
            <Input
              id="quantity"
              type="number"
              min={0}
              step={1}
              placeholder="0"
              aria-invalid={!!errors.quantity}
              {...register("quantity", { valueAsNumber: true })}
            />
            {errors.quantity && (
              <p className="text-sm text-destructive">
                {errors.quantity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" htmlFor="validity">
              Validade
            </label>
            <Input
              id="validity"
              type="date"
              aria-invalid={!!errors.validity}
              {...register("validity")}
            />
            {errors.validity && (
              <p className="text-sm text-destructive">
                {errors.validity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Categoria</label>
            <CategorySelect
              value={categoryValue}
              onValueChange={onCategoryChange}
              invalid={!!errors.category}
            />
            {errors.category && (
              <p className="text-sm text-destructive">
                {errors.category.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline" type="button" />}>
              Cancelar
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? <Spinner /> : "Cadastrar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProductView;
