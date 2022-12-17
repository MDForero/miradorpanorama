import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocation, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from "../images/logo.png"

const Contacto = () => {
    return (
        <div>
            <main className="preview" id="contact">
                <div>
                    <img src={logo} alt="" width="40%" />
                </div>
            </main>
            <section className='grid-contact'>
               
                    <a className='card-contact' href="tel:+573219251480">
                        <div><FontAwesomeIcon icon={faPhone} size="4x"/></div>
                        <h4>Llamadas</h4>
                        <p>+57 321 9251480</p>
                    </a>
                    <a className='card-contact' href="https://wa.me/+573219251480">
                        <div><FontAwesomeIcon icon={faWhatsapp} size="4x"  /></div>
                        <h4>Escríbenos</h4>
                        <p>+57 321 9251480</p>
                    </a>
                    <a className='card-contact' href="https://goo.gl/maps/eEYio6fg9U91gYTU8">
                        <div><FontAwesomeIcon icon={faMapLocationDot}  size="4x" /></div>
                        <h4>Ubicados en:</h4>
                        <p>Calle 14#15-101, Monterrey, Casanare</p>
                    </a>
                
            </section>
            <section className='map'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3746507641954!2d-72.90332328553109!3d4.876755096459018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6acdcb43a6b649%3A0xae93f5ef74202964!2sEl%20Mirador%20Panorama!5e0!3m2!1ses-419!2sco!4v1671314601781!5m2!1ses-419!2sco" width="100%" height="450" loading="lazy"></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contacto