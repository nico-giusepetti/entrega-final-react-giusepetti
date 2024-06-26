import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <div class="container">
            <div class="cargando">
                <div class="pelotas"></div>
                <div class="pelotas"></div>
                <div class="pelotas"></div>
                <span class="texto-cargando">cargando</span>
            </div>
        </div>
    )
}

export default Loader