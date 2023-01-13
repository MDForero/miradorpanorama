import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

    return (
        <div>
            <Navbar bg="dark" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                            <NavLink className='nav-link' to="glamping" >Glamping</NavLink>
                            <NavLink className='nav-link' to="menu" >Restaurante</NavLink>
                            <NavLink className="nav-link" to="nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link" to="contacto">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout