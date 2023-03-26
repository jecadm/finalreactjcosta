import React from 'react'
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from './components/Main'
import CartContext from './contexto/CartContext'
import { ToastContainer } from "react-toastify"
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
 
    return( 
      <BrowserRouter>
            <CartContext>
                <NavBar/>
                <Main/>
            </CartContext>
            <Footer/>
            <ToastContainer/>
      </BrowserRouter>  
    )
}


export default App