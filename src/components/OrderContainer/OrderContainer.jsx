import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import './OrderContainer.css'


const OrderContainer = () => {

    const [ordenes, setOrdenes] = useState([])

    useEffect(() => {
        (async () => {
            const db = getFirestore()
            const docsRef = collection(db, "ordenes")
            const querySnapshop = await getDocs(docsRef)
            setOrdenes(querySnapshop.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })()
    }, [])

    return (
        <div className='contenedor-ordenes'>
            {ordenes.length === 0 ? (
                <p className='mensaje-vacio'>No hay órdenes para mostrar</p>
            ) : (
                ordenes.map(orden => (
                    <div className='orden' key={orden.id}>
                        <div className='orden-header'>
                            <h3>ID de Orden: {orden.id}</h3>
                            <p>Total: ${orden.total}</p>
                        </div>
                        <p className='cliente'>cliente: {orden.comprador.name}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default OrderContainer