import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Componet/Nav'
import Shop from './pages/Shopping/Shop'
import Cart from './pages/Cart/Cart'
import './App.css'
import { ShopContextProvider } from './context/shopContext'


function App() {
     return (
        <div className='app'>
          <ShopContextProvider>
            <Router>
               <Nav/>
               <Routes>
                   <Route path='/' element={<Shop/>}/>
                   <Route path='/cart' element={<Cart/>}/>
               </Routes>
          </Router>
           </ShopContextProvider>
        </div>
     )
}

export default App
