"use client";

import useStock from "@/features/stock/useStock";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatDate(value: Date | string | null | undefined) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return dateFormatter.format(date);
}

function isExpired(value: Date | string | null | undefined) {
  if (!value) return false;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  return date < new Date();
}

const useProductsViewModel = () => {
  const { data, error, isLoading } = useStock();

  const products = data?.map((stock) => ({
    id: stock.id,
    name: stock.name,
    category: stock.category,
    quantity: stock.quantity,
    validity: formatDate(stock.validity),
    isExpired: isExpired(stock.validity),
    registeredAt: formatDate(stock.registered_at),
  }));

  return {
    products,
    error,
    isLoading,
  };
};

export default useProductsViewModel;
