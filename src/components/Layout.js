import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/">Mirador Panorama</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                            <NavDropdown menuVariant='dark' title="Servicios" id="basic-nav-dropdown">
                                <Link to="glamping" className='dropdown-item'>Glamping</Link>
                                <Link to="restaurante" className='dropdown-item'>Restaurante</Link>
                            </NavDropdown>
                            <NavLink className="nav-link" to="nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link" to="servicios">Servicios</NavLink>
                            <NavLink className="nav-link" to="contacto">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout