"use client";
import CategorySelectView from "./categorySelect.view";
import useCategoryViewModel, {
  CategorySelectParams,
} from "./categorySelect.viewmodel";

const CategorySelect = (props: CategorySelectParams) => {
  const categorySelectLogic = useCategoryViewModel(props);
  return <CategorySelectView {...categorySelectLogic} />;
};

export default CategorySelect;
