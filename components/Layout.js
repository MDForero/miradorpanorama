import React, {useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import panorama from "../public/logo.png"
import Footer from './Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({children}) => {
    const [navbarColor, setNavbarColor] = useState("trasparente")
    const [collapsed, setCollapsed] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setCollapsed(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [router]);

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
                    <NavbarBrand href='/'><Image src={panorama} alt="logo panorama" height={80}/></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> setCollapsed(!collapsed)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className="nav-link" href="/">Inicio</Link>
                            <Link className='nav-link' href="glamping" >Glamping</Link>
                            <Link className='nav-link' href="menu" >Restaurante</Link>
                            <Link className="nav-link" href="nosotros">Nosotros</Link>
                            <Link className="nav-link" href="contacto">Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
            <Footer />
        </div>
    )
}

export default Layout