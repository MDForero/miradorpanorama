import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import alcaldia from "../images/corazon.png"
import fondo from "../images/Logo-FE-naranja.png"
import sena from "../images/senaverde.png"
import colombia from "../images/185-1859277_imagenes-de-colombia-logo-colombia-es-una-republica-removebg-preview.png"


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
                        <li><Link to="restaurante" className='nav-link'>Restaurante</Link></li>
                        <li><Link to="glamping" className='nav-link'>Glamping</Link></li>
                        <li><Link to='' className='nav-link'>Misión</Link></li>
                        <li><Link to='' className='nav-link'>Visión</Link></li>
                        <li><Link to='' className='nav-link'>Galería</Link></li>
                        <li><Link to='restaurante/menu' className='nav-link'>Menú</Link></li>
                    </ul>
                </div>
                <div>

                    <ul>
                        <li><a href='' className='nav-link'>Políticas de privacidad </a></li>
                        <li><a href='' className='nav-link'>Aviso Legal</a></li>
                        <li><a href='' className='nav-link'>Acerca de las Cookies</a></li>
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
                    <img src={sena} alt="logo del sena" />
                    <img src={fondo} alt="logo del fondo emprender" />
                    <img src={colombia} alt="Escudo de la republica de colombia" />
                    <img src={alcaldia} alt="Logo Alcaldía de Monterrey" />
                </div>
            </div>
        </>
    )
}

export default Footer