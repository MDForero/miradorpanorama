import { faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import glamping from "../images/glampingintroduccion.jpg"

const Glamping = () => {
    return (
        <div>
            <main className='preview' id="glamping"></main>
            <h1 style={{ textAlign: "center", margin: "20px" }}>Hospedarte con nosotros es una experiencia inolvidable</h1>
            <section className='glamping'>
                <div>
                    <p style={{ fontSize: "1.5rem" }}>Regrese a la naturaleza con estilo, mientras se aloja en el corazón de una bulliciosa ciudad. Nuestros glamping están situados entre los árboles cerca al río tua, con vistas al río y montañas. Con cómodas habitaciones, modernas instalaciones, nuestras suites hacen que sea fácil relajarse y disfrutar del mejor espectáculo de la naturaleza.</p>
                </div>
                <figure style={{ width: "100%", overflow: "hidden" }}>
                    <img src={glamping} width="100%" style={{ objectFit: "cover" }} alt="" />
                </figure>

            </section>
            <section style={{ backgroundColor: "rgb(229, 229, 229)", }}>
                <h1 style={{ textAlign: "center", margin: "30px auto" }}>Planes y precios</h1>
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
                    <article className='paquetes'>
                        <h3>Cada paquete incluye</h3>
                        <ul>
                            <li>Desayuno</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </article>
                </div>
            </section>
            <section className='grid-gallery'>
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
                <div className='grid-gallery__item' href="#">
                    <img src={glamping} className="grid-gallery__image" style={{ margin: "0px auto" }} />
                </div>

            </section>
        </div>
    )
}

export default Glamping