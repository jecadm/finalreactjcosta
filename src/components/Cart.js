import React, { useContext } from 'react'
import { useState } from "react"
import { contexto } from '../contexto/CartContext'
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, serverTimestamp, addDoc, } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Cliente = () => {
    const [client, setClient] = useState({ nombre: '', telefono: '', email: '' })
  
    const { carrito, totalPrice, clear, removeItem, cartCounter } = useContext(contexto)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setClient({
        ...client,
        [name]: value
      })
    }
    const endPurchase = () => {
      const orden = {
        client,
        items: carrito,
        date: serverTimestamp(),
        total: totalPrice()
      }
  
      const ordenesCollection = collection(db, "ordenes")
      const pedido = addDoc(ordenesCollection, orden)
  
  
      if (client.nombre && client.telefono && client.email) {
        pedido
          .then(res => {
            toast.success('Compra exitosa!, Orden: '+ res.id)
          })
          .catch(error => {
            toast.error("hubo un error!")
          })
          .finally(() => {
            clear()
          })
      } else {
        toast.error("Por favor complete sus datos")
      }
    }  

  return (
    <section className="cartList mt-3">
            <p className='ml-5 fontDetail'><b>Carrito</b></p>
            {carrito.map(item => (
                <div className="row g-0 ml-5 mb-5 mt-5">
                    <div className="col-md-3">
                        <img src={item.image} className="img-fluid rounded-start img-cart" alt="..."/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body" key={item.id}>
                          <h5 className="card-title">{item.title}</h5>
                          <div className="row">
                              <p className="ml-3 mr-5">{item.quantity} x ${item.price}</p>
                              <p>Total Parcial : ${item.quantity * item.price}</p>
                          </div> 
                          <button className= 'btn btn-danger' onClick={() => removeItem(item.id)} >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-trash' viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                          </button>
                          <hr className='mt-5'></hr>
                      </div>
                    </div> 
                </div>
            ))}
                <div className='totalprice-cart row'>
                    {totalPrice() === 0
                     ? null 
                     : <h4 className='mr-5'>Precio total: ${totalPrice()}</h4>}
                    {cartCounter() === 0 
                    ? <div className='ml-5 font-carrito'>
                        <p className='mr-5'>El carrito está vacio</p>
                        <Link to='/' className=' underline ml-1'>Volver a Productos</Link> 
                      </div> 
                    : <button className="btn btn-outline-info ml-5 text-center" onClick={() => { clear() }} >Vaciar Carrito</button>}
                </div>
                    <p className='mt-5 ml-5'>Datos para la compra</p>
                    <form className="form ml-5">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input value={client.nombre} name="nombre" className='form-control' type="text" id="nombre" onChange={handleChange} />
                            <label htmlFor="telefono">Teléfono</label>
                            <input value={client.telefono} name="telefono" id="telefono" className='form-control' type="number" onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                            <input value={client.email} name="email" id="email" type="email" className='form-control' onChange={handleChange} />
                        </div>
                    </form>
                    <button className="btn btn-outline-info text-center mt-5 ml-5" onClick={() => endPurchase()}>Finalizar Compra</button>
        </section>
  )
}
export default Cliente

