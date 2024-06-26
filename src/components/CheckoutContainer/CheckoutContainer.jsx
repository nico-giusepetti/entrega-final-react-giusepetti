import React, { useContext } from 'react'
import Checkout from '../Checkout/Checkout'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/Cart/CartContext'
import Swal from 'sweetalert2'



const CheckoutContainer = () => {

    const navigate = useNavigate()
    const { cart, totalPriceCart, clearCart } = useContext(CartContext)

    const ordenCompleta = async (comprador) => {

        const orden = {
            comprador,
            items: cart,
            total: totalPriceCart
        }

        const db = getFirestore()
        const docRef = collection(db, "ordenes")
        const result = await addDoc(docRef, orden)
        console.log(result.id)
        clearCart()
        Swal.fire("El id de su orden de compra es: " + result.id);
        navigate("/ordenes")
    }

    return (
        <Checkout ordenCompleta={ordenCompleta} />
    )
}

export default CheckoutContainer