"use client";

import { StockService } from "@/services/stock/stock.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteStock() {
  const { deleteStock } = StockService();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock"] });
    },
  });
}
