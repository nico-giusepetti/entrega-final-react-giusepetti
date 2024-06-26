import React from 'react'
import './ItemsList.css'
import Item from '../Item/Item'

const ItemsList = ({productos}) => {
    return (
        productos.map((producto) => (
            
            <div key={producto.id} className='container-list'>
                <Item producto={producto}/>
            </div>
        ))
    )
}

export default ItemsList