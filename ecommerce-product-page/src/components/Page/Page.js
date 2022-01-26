import React from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductPreview from "./ProductPreview/ProductPreview";

import "./Page.scss";

const Page = () => {
  return (
    <main className="Page">
      <ProductPreview />
      <ProductInfo />
    </main>
  );
};

export default Page;
