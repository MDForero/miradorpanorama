import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <nav>
                <div>
                    <a>
                        <img /> Logo
                    </a>
                </div>
                <a><Link to="/">Inicio</Link></a>
                <a><Link to="nosotros">Nosotros</Link></a>
                <a><Link to="servicios">Servicios</Link></a>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Layout