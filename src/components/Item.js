import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='card mb-3 caja mt-3'>
                <div key={item.id} className='card-body text-center'>
                    <img src={item.image} className='img-box mb-3' alt='imagen de cada producto'></img>
                    <h5 className='card-title fontSizeProd fontWCateg'>{item.title}</h5>
                    <p className='card-text'>{item.material}</p>
                    <p className='card-text fontwBold'>${item.price}</p>
                    <Link to={`/items/${item.id}`} className='text-center mb-3'>
                        <button type="button" id="boton" className="btn-success btn btn-small">
                              Ver detalle y comprar
                        </button>
                    </Link>
                </div> 
    </div>
  )
}
export default Item

