'use client'
import React, {use, useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Layout = () => {
    const [navbarColor, setNavbarColor] = useState("bg-cyan-700 lg:bg-transparent")
    const [collapsed, setCollapsed] = useState(false)
    

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 200) {
                setNavbarColor('bg-cyan-700 ');
            } else {
                setNavbarColor("bg-cyan-700 lg:bg-transparent")
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    


    return (
        <div>
            <Navbar expand="lg" expanded={collapsed} className={navbarColor + ''} fixed="top">
                <Container>
                    <NavbarBrand href='/'><Image loading='lazy' src='/panorama.png' width={80} alt="logo panorama" height={80}/></NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> setCollapsed(!collapsed)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className="nav-link" onClick={()=>setCollapsed(!collapsed)} href="/">Inicio</Link>
                            <Link className='nav-link' onClick={()=>setCollapsed(!collapsed)} href="/glamping" >Glamping</Link>
                            <Link className='nav-link' onClick={()=>setCollapsed(!collapsed)} href="/menu" >Restaurante</Link>
                            <Link className="nav-link" onClick={()=>setCollapsed(!collapsed)} href="/nosotros">Nosotros</Link>
                            <Link className="nav-link" onClick={()=>setCollapsed(!collapsed)} href="/contacto">Contacto</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Layout