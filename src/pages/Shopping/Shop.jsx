import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop__divs">
      <div className="shop__title">
        <h2>HexTech Shop</h2>
      </div>
      <div className="product__divs">
        <div className="product">
          {PRODUCTS.map((product) => {
             return <Product data={product} />;
          })}
        </div>
      </div>
     
    </div>
  );
};

export default Shop;
