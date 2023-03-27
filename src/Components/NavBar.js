import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  
  return (
      <>
        <header>
            <nav className='main-nav'>
                <ul id='main-menu' className='main-menu'>
                <Link to="/">
                    <h1 className='nav-brand'>Tienda de Morondanga</h1>
                </Link>    
                    <li className='main-menu__item'>
                        <a href='/' className='main-menu__link'>Home</a>
                    </li>
                    <Link to="/" className='productos-navbar main-menu__link'>Productos</Link>
                    
                    <CartWidget/>
                </ul>
            </nav>
            <h3 className='titulos'>Productos</h3>
        </header>
        <section>
            <nav className='nav ml-4 '>
                <Link className="nav-link liNav active" to="/category/Macetas">Macetas</Link>
                <Link className="nav-link liNav" to="/category/Tazas">Tazas</Link>
                <Link className="nav-link liNav" to="/category/Cuencos">Cuencos</Link>
                <Link className="nav-link liNav" to="/category/Floreros">Floreros</Link>
            </nav> 
        </section>
    </>
  )
}

export default NavBar
