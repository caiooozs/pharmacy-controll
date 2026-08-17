"use client";

import ProductsView from "./products.view";
import useProductsViewModel from "./products.viewmodel";
const Products = () => {
  const productsLogic = useProductsViewModel();
  return <ProductsView {...productsLogic} />;
};

export default Products;
