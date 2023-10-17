import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "../Cart/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  
  const totalAmount = getTotalAmount();

  const navigate = useNavigate()
  const handleNavigate = () => {
      navigate("/")
  }
  return (
    <div className="cart">
      <div className="cart__name">
        <h3>Your Cart Item</h3>
      </div>
      <div className="cart__item">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      { totalAmount > 0 ? 
      <div className="check">
        <p>Subtotal:${totalAmount}</p>

        <div className="button">
             <button className="buttons" onClick={handleNavigate}>Continue Shopping</button>
             <button className="buttons"> Checkout</button>
        </div>
      </div>
      : <h1>Your cart is empty</h1> }
    </div>
  );
};

export default Cart;
