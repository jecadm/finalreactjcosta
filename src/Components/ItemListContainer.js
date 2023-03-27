import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() => {
    const productosCollection = collection(db, "productos")
    const pedido = getDocs(productosCollection)

    if(categoryId){
        const queryCollectionCategory = query(collection(db, 'productos'), where('category', '==', categoryId))
        getDocs(queryCollectionCategory)
          .then(resp => setItems(resp.docs.map(prod => (prod.data()))))
          .catch((error) => {
            toast.error("Error al cargar productos");
            })
          .finally(() => setLoading(false))
		} else {
			pedido
          .then((resultado) => {
            resultado.docs.forEach(doc => {
              const arrayResultado = resultado.docs.map((doc) => doc.data())
              setItems(arrayResultado)
              setLoading(false)
					})
				})
          .catch((error) => {
            toast.error("Error al cargar productos");
				})
          .finally(() => {
            setLoading(false)
				})
		}
	}, [categoryId])


  if(loading){
    return( 
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Cargando...</span>
        </div>
      </div>
    )
  }else{
    return (
    <ItemList items={items}/>

    )
  }
}

export default ItemListContainer