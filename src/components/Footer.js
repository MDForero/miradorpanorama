import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div >
                <h4>!Síguenos en nuestras redes¡</h4>
                <ul className="redes">
                    <li><a><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
                    <li><a><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                    <li><a><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a>Restaurante</a></li>
                    <li><a>Glamping</a></li>
                    <li><a>Misión</a></li>
                    <li><a>Visión</a></li>
                    <li><a>Galería</a></li>
                    <li><a>Menú</a></li>
                </ul>
            </div>
            <div>

                <ul>
                    <li><a>Políticas de privacidad </a></li>
                    <li><a>Aviso Legal</a></li>
                    <li><a>Acerca de las Cookies</a></li>
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
    )
}

export default Footer