"use client";
import useCategory from "@/features/stock/queries/useCategory";

const useCategoryViewModel = () => {
  const { data, error, isLoading } = useCategory();

  return { data, error, isLoading };
};

export default useCategoryViewModel;
