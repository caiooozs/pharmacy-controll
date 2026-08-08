"use client";
import CategorySelectView from "./categorySelect.view";
import useCategoryViewModel from "./categorySelect.viewmodel";

const CategorySelect = () => {
  const categorySelectLogic = useCategoryViewModel();
  return <CategorySelectView {...categorySelectLogic} />;
};

export default CategorySelect;
