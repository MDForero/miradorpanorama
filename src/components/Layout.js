import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import panorama from "../images/logo.png"
import Footer from './Footer'

const Layout = () => {
    const [navbarColor, setNavbarColor] = useState("trasparente")
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setCollapsed(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setNavbarColor('navbar-dark bg-two');
            } else {
                setNavbarColor("trasparente ")
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <Navbar expand="lg" expanded={collapsed} className={navbarColor} fixed="top">
                <Container>
                    <NavbarBrand href='/'><img src={panorama} alt="logo panorama" height="80px "/></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> setCollapsed(!collapsed)}/>
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