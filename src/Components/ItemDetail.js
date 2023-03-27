import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import {useContext} from 'react'
import { contexto } from '../Contexto/CartContextbk';


const ItemDetail = ({ item }) => {

  const [cantCart, setCantCart] = useState(0)
  const { addItem } = useContext(contexto)

  const onAdd = (quantity) => {
        setCantCart(cantCart + quantity)
        addItem(item, quantity)
  }

  return (
    <div className='row container-detail p-5 mt-4'>
       <div>
         <img src={item.image} className='img-box-detail' alt="" />
       </div>
       <div className='ml-5'>
          <p className='fontDetail'>{item.title}</p>
          <p className='font-detail-subtitles'>${item.price}</p>
          <p className='cuotas'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='30' fill='currentColor' className='bi bi-credit-card mr-2' viewBox='0 0 16 16'>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
            </svg>
            <span> 3 cuotas sin interés de $663,33</span>
          </p>
          <p><b>10% de descuento</b> pagando con Transferencia / Depósito</p>
          
          <hr></hr>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            <Link to="/cart" className='mt-2 btn btn-outline-info'>Finalizar compra</Link>
        </div>
        <div className='mt-3'>
          <p><b>Description</b></p>
          <p>{item.description}</p>
        </div>
    </div>
  )
}
export default ItemDetail