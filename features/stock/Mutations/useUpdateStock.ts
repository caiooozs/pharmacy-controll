"use client";

import { StockService } from "@/services/stock/stock.service";
import { Stock } from "@/services/stock/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateStock() {
  const { updateStock } = StockService();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock"] });
    },
  });
}
