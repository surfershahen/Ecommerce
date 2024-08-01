import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Breadcrum,
  ProductDisplay,
  RelatedProducts,
  DescriptionBox,
} from "../components";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find(e => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
