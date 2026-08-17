"use client";

import { useQuery } from "@tanstack/react-query";
import { StockService } from "@/services/stock/stock.service";

export default function useCategory() {
  const { getCategories } = StockService();

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { data, error, isLoading };
}
