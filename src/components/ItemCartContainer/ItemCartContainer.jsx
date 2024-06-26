import React, { useContext } from 'react'
import CartContext from '../../context/Cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import './ItemCartContainer.css'
import icon_comprar_carrito from '/assets/comprar-carrito.png'
import icon_eliminar from '/assets/borrar.png'

const ItemCartContainer = () => {
    const { cart, totalPriceCart, clearCart} = useContext(CartContext)
    
    return (
        <div className="contenedor-carrito">
            {cart.length === 0 ? (
                <p className='mensaje-vacio'>No hay productos en el carrito de compras.</p>
            ) : (
                <>
                    {cart.map(item => (
                        <ItemCart key={item.id} item={item} />
                    ))}
                    <div className="total-carrito">
                        <p>Total: ${totalPriceCart}</p>
                        <Link to='/checkout'>
                            <button className="btn-comprar-carrito">
                                Comprar Carrito
                                <img src={icon_comprar_carrito} alt="Carrito" className="icono-agregar-carrito" /> 
                            </button>
                        </Link>
                        <button className="btn-borrar-carrito" onClick={() => clearCart()}>
                                Eliminar Carrito
                                <img src={icon_eliminar} alt="Carrito" className="icono-borrar-carrito" /> 
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemCartContainer
