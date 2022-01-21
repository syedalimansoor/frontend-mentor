import React from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductPreview from "./ProductPreview/ProductPreview";

const Page = () => {
  return (
    <main>
      <ProductPreview />
      <ProductInfo />
    </main>
  );
};

export default Page;
