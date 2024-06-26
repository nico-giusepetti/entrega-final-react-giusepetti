import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemsListContainer.css'
import ItemsList from '../ItemsList/ItemsList'
import Loader from '../Loader/Loader'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoria } = useParams()
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        (async () => {
            setLoading(true)
            const db = getFirestore()

            if (!categoria) {
                const docsRef = collection(db, "productos")
                const querySnapshop = await getDocs(docsRef)
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            } else {
                const docsRef = collection(db, "productos")
                const q = query(docsRef, where("categoria", "==", categoria))
                const querySnapshop = await getDocs(q)
                setProductos(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
            }
            setLoading(false)
        })()

    }, [categoria])

    if (loading) return <Loader />

    return (
        <div className='seccion-listContainer'>

            {productos.length == 0 ?

                <Loader />

                :

                <ItemsList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer