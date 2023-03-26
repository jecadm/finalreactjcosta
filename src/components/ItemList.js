import React from 'react'
import Item from './Item'

 const ItemList = ({items}) => {
  return (
    <section className='row itemList'>
        {items.map((item) => {
            return <Item key={item.id} item={item}/>
        })}
    </section>
  )
}

export default ItemList
