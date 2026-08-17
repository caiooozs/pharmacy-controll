"use client";

import { StockService } from "@/services/stock/stock.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateStock() {
  const { createStock } = StockService();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock"] });
    },
  });
}
