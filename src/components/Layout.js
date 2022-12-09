import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/">Mirador Panorama</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto my-2 my-lg-0">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                            <NavLink className="nav-link" to="nosotros">Nosotros</NavLink>
                            <NavLink className="nav-link" to="servicios">Servicios</NavLink>

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