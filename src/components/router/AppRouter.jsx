import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from '../ItemsListContainer/ItemsListContainer';
import NavBar from '../NavBar/NavBar';
import ItemsDetailContainer from '../ItemsDetailContainer/ItemsDetailContainer';
import CartProvider from '../../context/Cart/CartProvider';
import ItemCartContainer from '../ItemCartContainer/ItemCartContainer';
import CheckoutContainer from '../CheckoutContainer/CheckoutContainer';
import OrderContainer from '../OrderContainer/OrderContainer';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemsDetailContainer/>} />
                    <Route path="/cart" element={<ItemCartContainer/>} />
                    <Route path="/checkout" element={<CheckoutContainer/>}/>
                    <Route path='/ordenes' element={<OrderContainer/>}/>
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter