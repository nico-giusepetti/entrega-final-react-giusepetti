import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '/assets/logo-ng.png'
import CartWidget from '../CartWidget/CartWidget'
import logo_ordenes from '/assets/orden-pedido.png'


const NavBar = () => {
    return (
        <nav className='nav'>
            <Link to='/'>
                <img src={logo} alt="logo" className='logo-principal' />
            </Link>
            
            <ul className='categorias'>
                <li>
                    <Link to='/categoria/proteinas'>
                        Proteinas
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/creatinas'>
                        Creatinas
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/energizantes'>
                        Energizantes
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/recuperacion-muscular'>Recuperación muscular</Link>
                </li>
                <li>
                    <Link to='/categoria/vitaminas-y-minerales'>
                        Vitaminas y minerales
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/control-de-peso'>
                        Control de peso
                    </Link>
                </li>
                <li>
                    <Link to='/categoria/accesorios'>
                        Accesorios
                    </Link>
                </li>
            </ul>

            <div className='logos'> 
                <CartWidget />
                <Link to='/ordenes'>
                    <img src={logo_ordenes} alt="logo" className='logo-ordenes' />
                </Link>
            </div>
            
        </nav>
    )
}

export default NavBar