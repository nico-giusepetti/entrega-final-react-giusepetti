import React from 'react'
import './ItemsDetailContainer.css'
import ItemsDetail from '../ItemsDetail/ItemsDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemsDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(()=>{
        (async ()=>{
            const db= getFirestore()
            const docRef= doc(db,"productos",id)
            const docSnap= await getDoc(docRef)
            setProducto(({id:docSnap.id,...docSnap.data()}))
        })()
    },[])


    if (!producto) {
        // Mostrar un mensaje de carga o un mensaje de error si item es undefined
        return <Loader/>
    }

    return (
        <>
            <ItemsDetail producto={producto}/>
        </>  
    )
}

export default ItemsDetailContainer

