"use client";

import { useQuery } from "@tanstack/react-query";
import { StockService } from "@/services/stock/stock.service";

export default function useStock() {
  const { getStock } = StockService();

  const { data, error, isLoading } = useQuery({
    queryKey: ["stock"],
    queryFn: getStock,
  });

  return { data, error, isLoading };
}
