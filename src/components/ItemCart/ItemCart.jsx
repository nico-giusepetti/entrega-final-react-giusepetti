import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'
import './ItemCart.css'
import icon_eliminar from '/assets/borrar.png'

const ItemCart = ({ item }) => {

    const { deleteItemCart } = useContext(CartContext)

    return (
        <div className="item-carrito">
            <img src={item.imagen} alt={item.nombre} className="imagen-item" />
            <div className="detalles-item">
                <h3 className="nombre-item">{item.nombre}</h3>
                <span className="cantidad-item">Cantidad: {item.cantidad}</span>
            </div>
            <button className="boton-eliminar" onClick={() => deleteItemCart(item.id)}>
                <img src={icon_eliminar} alt="eliminar" />
            </button>
        </div>
    )
}

export default ItemCart