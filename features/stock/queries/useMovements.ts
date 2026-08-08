"use client";

import { useQuery } from "@tanstack/react-query";
import { StockService } from "@/services/stock/stock.service";

export default function useMovements() {
  const { getMovements } = StockService();

  const { data, error, isLoading } = useQuery({
    queryKey: ["movements"],
    queryFn: getMovements,
  });

  return { data, error, isLoading };
}
