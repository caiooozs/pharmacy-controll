"use client";
import useCategory from "@/features/categories/useCategory";

const useCategoryViewModel = () => {
  const { data, error, isLoading } = useCategory();

  return { data, error, isLoading };
};

export default useCategoryViewModel;
