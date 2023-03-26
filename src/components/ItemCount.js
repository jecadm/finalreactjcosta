import React from 'react'
import {useState} from 'react'



const ItemCount = ({stock, initial, onAdd}) => {
   

   const [count, setCount] = useState(initial)
   
   const handleSumar = () => {
      if(count < stock){
         setCount(count + 1)
      }else{
         alert("No hay stock")
      }
   }

   const handleRestar = () => {
      if(count > initial){ 
      setCount(count - 1)
      }
   }

   const handleReset = () => {
      setCount(0)
   }

   const agregarCarrito = () => {
      onAdd(count)
   }
   

  return (
    <section className='itemCount'>
      <p className='mr-2'>Cantidad: {count}</p>
      <div className='row ml-1'>   
         <button onClick={handleRestar} className='btn btn-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="currentColor" className='bi bi-chevron-down' viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
         </button>
         <button onClick={handleSumar} className='btn btn-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" fill="currentColor" className='bi bi-chevron-compact-up' viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
             </svg>
         </button>   
         <button onClick={handleReset} className='btn ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-trash3' viewBox="0 0 16 16">
               <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
         </button>
      </div>
      <button onClick={agregarCarrito} className='mt-3 btn btn-outline-info'>Agregar al carrito</button>
    </section>
  )
}

export default ItemCount

