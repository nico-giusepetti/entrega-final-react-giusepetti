import React, { useContext, useState } from 'react'
import './ItemsDetail.css'
import ItemCount from '../Count/ItemCount'
import CartContext from '../../context/Cart/CartContext'
import { count } from 'firebase/firestore'
import icon_agregar_carrito from '/assets/agregar-producto.png'

const ItemsDetail = ({ producto }) => {

    const [count, setCount] = useState(1)
    const { cart, addItemCart } = useContext(CartContext)



    return (
        <div key={producto.id} className='contenedor-detalle'>
            <img src={producto.imagen} alt="img del producto seleccionado" className="producto-imagen" />
            <div className="detalles-producto">
                <h3 className="nombre-producto">{producto.nombre}</h3>
                <p className="descripcion-producto">{producto.descripcion}</p>
                <p className="marca-producto">~ Marca: {producto.marca}</p>
                <p className="contenido-producto">~ Contiene: {producto.contenido}</p>
                <p className="categoria-producto">~ Categoria: {producto.categoria}</p>
                <p className="precio-producto">Precio unitario: ${producto.precio}</p>
                <div className="unidades-producto">
                    <p><span className='texto-cantidad'>Cantidad:</span> <ItemCount count={count} handleCount={setCount} stock={producto.stock} /></p>
                </div>
                <button className="boton-agregar-carrito" onClick={() => addItemCart({ ...producto, cantidad: count })}>
                    Agregar al Carrito
                    <img src={icon_agregar_carrito} alt="Carrito" className="icono-agregar-carrito" /> 
                </button>
            </div>

        </div>
    )
}

export default ItemsDetail