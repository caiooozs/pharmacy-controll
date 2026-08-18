"use client";
import useCategory from "@/features/categories/useCategory";

export type CategorySelectParams = {
  value?: number | null;
  onValueChange?: (value: number | null) => void;
  invalid?: boolean;
};

const useCategoryViewModel = ({
  value,
  onValueChange,
  invalid,
}: CategorySelectParams = {}) => {
  const { data, error, isLoading } = useCategory();

  const items =
    data?.map((category) => ({
      label: category.name,
      value: category.id,
    })) ?? [];

  return { data, error, isLoading, items, value, onValueChange, invalid };
};

export default useCategoryViewModel;
