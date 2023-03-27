import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

 const Main = () => {
  return (
      <Routes>  
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/items/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
      </Routes>  
  )
}
export default Main;
