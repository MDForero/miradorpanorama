import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/">Mirador Panorama</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/">Inicio</Link></Nav.Link>
                            <Nav.Link ><Link to="nosotros">Nosotros</Link></Nav.Link>
                            <Nav.Link ><Link to="servicios">Servicios</Link></Nav.Link>

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