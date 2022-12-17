import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const Glamping = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand ><Link to="/">Mirador panorama</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Inicio</Link></Nav.Link>
            <Nav.Link ><Link to="reservas">Reservas</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Glamping