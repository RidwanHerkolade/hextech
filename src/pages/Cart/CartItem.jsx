import React, { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../../context/shopContext'

const CartItem = (props) => {
  const {cartItems, addToCart, removeFromCart, updateAmount} = useContext(ShopContext)
    const { id, productName, price, productImg} = props.data
  return (
    <div className='cartItem'>
          <div className='item__img'>
         <img src={productImg} alt=''/>
         </div>
         <div className='description'>
               <p>
           
                  <b>{productName}</b>
                </p>
               <p>${price}</p>
               <div className='count__handler'>
                   <button onClick={() => removeFromCart(id)}>-</button>
                  <input value={cartItems[id]} onChange={(event) => updateAmount(Number(event.target.value), id)}/>
                   <button onClick={() => addToCart(id)}>+</button>
               </div>
         </div>

    </div>
  )
}

export default CartItem