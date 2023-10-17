import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

import "./Shop.css";

const Product = (props) => {
  const { id, productName, price, productImg } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="pro__div">
      <div className="pro__divs">
        <div className="img">
          <img src={productImg} alt="" />
        </div>
        <div className="divss">
          <h1>{productName}</h1>
          <p>${price}</p>
          <div className="btn"> 
            <button onClick={() => addToCart(id)}>
              Add To Cart 
              {cartItemAmount > 0 && <>{cartItemAmount}</>} 
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
