import { faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import glamping from "../images/glampingintroduccion.jpg"
import { Imagen } from './Modal'
import logo from "../images/logo.png"


const Glamping = () => {
    const [modalShow, setModalShow] = useState(false)
    const [modalImg, setModalImg] = useState(null)
    const prueba = ({ img }) => {
        setModalShow(true)
        setModalImg(img)
    }
    return (
        <div>
            <main id="glamping">
                <div className='preview'>
                    <img src={logo} alt="el Mirador panorama" width="40%" />
                </div>
                <Container className='glamping center'>
                    <section className='ov-white'>
                        <h1 style={{ textAlign: "center", margin: "20px" }}>Hospedarte con nosotros es una experiencia inolvidable</h1>
                        <div>
                            <p className='descripciones' style={{ textAlign: "justify" }}>Regrese a la naturaleza con estilo, mientras se aloja en el corazón de una bulliciosa ciudad. Nuestros glamping están situados entre los árboles cerca al río tua, con vistas al río y montañas. Con cómodas habitaciones, modernas instalaciones, nuestras suites hacen que sea fácil relajarse y disfrutar del mejor espectáculo de la naturaleza.</p>
                        </div>
                    </section>
                </Container>
            </main>
            <section style={{ backgroundColor: "rgb(229, 229, 229)", }}>
                <h1 style={{ textAlign: "center", padding: "30px 0px 0px" }}>Planes y precios</h1>
                <div className='promociones'>
                    <article className="paquetes">
                        <h3>Platinum</h3>
                        <h1>200$</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <a className='btn btn-outline-danger centered' href="https://api.whatsapp.com/send?phone=573202336531&text=Estoy%20interesado%20en%20el%20paquete%20nombredelpaquete">Contactar</a>
                    </article>
                    <article className="paquetes">
                        <h3>Gold</h3>
                        <h1>200$</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <a className='btn btn-outline-danger centered' href="https://api.whatsapp.com/send?phone=573202336531&text=Estoy%20interesado%20en%20el%20paquete%20nombredelpaquete">Contactar</a>
                    </article>
                    <article className='paquetes'>
                        <h3>Premium</h3>
                        <h1>200$</h1>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <a className='btn btn-outline-danger centered' href="https://api.whatsapp.com/send?phone=573202336531&text=Estoy%20interesado%20en%20el%20paquete%20nombredelpaquete">Contactar</a>
                    </article>
                </div>
            </section>
            <Container className='grid-gallery'>
                <Imagen show={modalShow} onHide={() => setModalShow(false)} img={modalImg} />
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto", cursor: "pointer" }} onClick={() => prueba({ img: glamping })} />
                </div>

                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>

            </Container>
        </div>
    )
}

export default Glamping