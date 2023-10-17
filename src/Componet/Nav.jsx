import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Nav.css'
import { ShopContext } from '../context/shopContext';

const navBar = () => {
  const {getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  return (
    <div className='nav__bar'>
        <div className="links">
             <Link to="/" className='shops'>Shop</Link>
             <Link to="/cart" ><AddShoppingCartIcon style={{color:"white"}} className='styles'/>{totalAmount.length}</Link>
        </div>
    </div>
  )
}

export default navBar