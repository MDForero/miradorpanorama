import { faFirstdraft, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCampground, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from "../images/compressed__DSC8487.jpg"
import img2 from "../images/compressed__DSC8491.jpg"
import img3 from "../images/compressed__DSC8494.jpg"
import img4 from "../images/compressed__DSC8550.jpg"

const Articulos = () => {
    const [image, setImage] = useState(img1)

    return (
        <>
            <h1 style={{ textAlign: "center" }}>EcoGlamping suite</h1>
            <div className='Container'>
                <div className='flex-wrap-start'>
                    <div className='w-400'>
                        <figure style={{ width: "100%", height: "400px" }}>
                            <img src={image} alt="" width="100%" height="100%" style={{ objectFit: "cover" }} />
                        </figure>
                        <div className='flex-wrap'>
                            <button onMouseOver={() => setImage(img1)}><img src={img1} alt="" width="80px" height="80px" /></button>
                            <button onMouseOver={() => setImage(img2)}><img src={img2} alt="" width="80px" height="80px" /></button>
                            <button onMouseOver={() => setImage(img3)}><img src={img3} alt="" width="80px" height="80px" /></button>
                            <button onMouseOver={() => setImage(img4)}><img src={img4} alt="" width="80px" height="80px" /></button>
                        </div>
                    </div>
                    <div className='w-600 descripcion-glamping'>

                        <section className='flex-wrap margin-center'>
                            <p><strong>Valor noche:</strong>  350000cop</p>
                            <a className='btn btn-outline-success flex '><strong>Reserva ya </strong> <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                        </section>
                        <section>
                            <div className='icons-glamping flex-wrap'>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faBed} size="3x" /> Cama King 2x2</div>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faCampground} size="3x" /> Plataforma privada de 40m²</div>
                            </div>
                            <div className='icons-glamping flex-wrap'>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faFirstdraft} size="3x" /> Terraza privada de 24m²</div>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faUserGroup} size="3x" /> Adultos 2 </div>
                            </div>
                        </section>
                        <section className='flex-wrap-start'>
                            <section>
                                <h3>La reserva incluye</h3>
                                <ul>
                                    <li>Desayuno Vip</li>
                                    <li>Room services</li>
                                    <li>WiFi</li>
                                    <li>Jacuzzi</li>
                                    <li>Malla Catamarán</li>
                                    <li>Mini bar</li>
                                    <li>Zona BBQ</li>
                                    <li>Maquina capuchino</li>
                                    <li>Canasta (vino, chocolates, pasabocas)</li>
                                </ul>
                            </section>
                            <section>
                                <h3>Adicionales</h3>
                                <ul>
                                    <li>Cena romantica</li>
                                    <li>Cena romantica</li>
                                    <li>Pasadías</li>
                                </ul>

                            </section>

                        </section>
                        <section>
                            <h3>Observaciones</h3>
                            <li>Todo adicional se solicita por WhatsApp después de reservar la suite</li>
                            <li>Cada huesped adicional tendrá un costó de 90.000 COP incluye desayuno, hasta un máximo de cuatro personas por suite</li>
                        </section>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Articulos