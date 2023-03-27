import React from 'react'
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Main from './Components/Main'
import CartContext from './Contexto/CartContext'
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