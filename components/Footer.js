import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import alcaldia from "../public/corazon.png"
import fondo from "../public/Logo-FE-naranja.png"
import sena from "../public/senaverde.png"
import colombia from "../public/185-1859277_imagenes-de-colombia-logo-colombia-es-una-republica-removebg-preview.png"
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
    return (
        <>
            <footer className='bg-two'>
                <div >
                    <h4>!Síguenos en nuestras redes¡</h4>
                    <ul className="redes">
                        <li><a href='https://www.facebook.com/elmiradorpanorama' target="_blank" className='nav-link'><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                        <li><a href='https://www.instagram.com/elmiradorpanorama/' target="_blank" className='nav-link'><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                        <li><a href='https://wa.me/+573219251480/' className='nav-link' target="_blank"><FontAwesomeIcon icon={faWhatsapp} target="_blank" size="2x" /></a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link href="restaurante" className='nav-link'>Restaurante</Link></li>
                        <li><Link href="glamping" className='nav-link'>Glamping</Link></li>
                        <li><Link href='nosotros' className='nav-link'>Misión</Link></li>
                        <li><Link href='nosotros' className='nav-link'>Visión</Link></li>
                        <li><Link href='nosotros' className='nav-link'>Galería</Link></li>
                        <li><Link href='restaurante/menu' className='nav-link'>Menú</Link></li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li><a href='#' className='nav-link'>Políticas de privacidad </a></li>
                        <li><a href='#' className='nav-link'>Aviso Legal</a></li>
                        <li><a href='#' className='nav-link'>Acerca de las Cookies</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Horarios de atención</h4>
                    <dl>
                        <dt>Lunes - Viernes</dt>
                        <dd>4:00 pm - 10:00 pm</dd>
                        <dt>Sábado - Domingo</dt>
                        <dd>2:00 pm - 10:00 pm</dd>
                    </dl>
                </div>
            </footer>
            <div className='w-100 bg-two'>
                <div className='logos'>
                    <Image src={sena} height={100} alt="logo del sena" />
                    <Image src={fondo} height={100} alt="logo del fondo emprender" />
                    <Image src={colombia} height={100} alt="Escudo de la republica de colombia" />
                    <Image src={alcaldia} height={100} alt="Logo Alcaldía de Monterrey" />
                </div>
            </div>
        </>
    )
}

export default Footer