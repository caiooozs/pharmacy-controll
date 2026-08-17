import useDeleteStock from "@/features/stock/Mutations/useDeleteStock";
import { toast } from "sonner";

export function useDeleteButtonViewModel(id: number) {
  const { mutate, isPending } = useDeleteStock();

  const handleDelete = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Produto excluído com sucesso.");
      },
      onError: () => {
        toast.error("Erro ao excluir produto.");
      },
    });
  };
  return {
    handleDelete,
    isPending,
  };
}
