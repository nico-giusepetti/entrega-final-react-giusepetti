import React, { useState } from 'react'
import './Checkout.css'


const Checkout = ({ ordenCompleta }) => {

    const [nombreComprador, setNombreComprador] = useState("")
    const [telefonoComprador, setTelefonoComprador] = useState("")
    const [emailComprador, setEmailComprador] = useState("")

    const handleCompleteOrder = async (e) => {
        e.preventDefault()
        const comprador = {
            name: nombreComprador,
            tel: telefonoComprador,
            email: emailComprador
        }

        await ordenCompleta(comprador)
    }

    return (
<form className='formulario-compra' onSubmit={(e) => handleCompleteOrder(e)}>
            <input 
                type="text" 
                value={nombreComprador} 
                onChange={(e) => setNombreComprador(e.target.value)} 
                placeholder='Ingrese su nombre y apellido' 
                required 
                className='input-compra'
            />
            <input 
                type="telephone" 
                value={telefonoComprador} 
                onChange={(e) => setTelefonoComprador(e.target.value)} 
                placeholder='Ingrese su teléfono' 
                required 
                className='input-compra'
            />
            <input 
                type="email" 
                value={emailComprador} 
                onChange={(e) => setEmailComprador(e.target.value)} 
                placeholder='Ingrese su email' 
                required 
                className='input-compra'
            />
            <button type='submit' className='boton-finalizar-compra'>Finalizar Compra</button>
        </form>
    )
}

export default Checkout