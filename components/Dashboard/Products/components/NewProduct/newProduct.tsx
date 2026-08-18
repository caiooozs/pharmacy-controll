"use client";

import NewProductView from "./newProduct.view";
import { useCreateProductViewModel } from "./newProduct.viewmodel";

const NewProduct = () => {
  const newProductLogic = useCreateProductViewModel();
  return <NewProductView {...newProductLogic} />;
};

export default NewProduct;
