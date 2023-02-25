import { faFirstdraft, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCampground, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from "../images/glamping/IMG-20230114-WA0002.jpg"
import img2 from "../images/glamping/IMG-20230114-WA0004.jpg"
import img3 from "../images/glamping/IMG-20230114-WA0009.jpg"
import img4 from "../images/glamping/IMG-20230114-WA0013.jpg"

const Articulos = () => {
    const [image, setImage] = useState(img1)
    
    return (
        <>
            <h1>EcoGlamping suite</h1>
            <div className='Container'>
                <div className='flex-wrap-start'>
                    <div className='w-400'>
                        <figure style={{ width: "400px", height: "400px" }}>
                            <img src={image} alt="" width="100%" height="100%" style={{ objectFit: "cover" }} />
                        </figure>
                        <div className='flex-wrap option-img'>
                            <div onMouseOver={() => setImage(img1)} ><img src={img1} alt="" width="80px" height="80px" /></div>
                            <div onMouseOver={() => setImage(img2)}><img src={img2} alt="" width="80px" height="80px" /></div>
                            <div onMouseOver={() => setImage(img3)}><img src={img3} alt="" width="80px" height="80px" /></div>
                            <div onMouseOver={() => setImage(img4)}><img src={img4} alt="" width="80px" height="80px" /></div>
                        </div>
                    </div>
                    <div className='w-600 descripcion-glamping'>

                        <section className='flex-wrap margin-center'>
                            <p><strong>Valor noche:</strong>  350000 cop</p>
                            <a href="http://wa.me/+573219251480" className='btn btn-outline-success flex '><strong>Reserva ya </strong>  <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                        </section>
                        <section>
                            <div className='icons-glamping flex-wrap'>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faBed} size="3x" color='#0D6EFD'/> Cama King 2x2</div>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faCampground} size="3x" color='#8CBF40' /> Plataforma privada de 40m²</div>
                            </div>
                            <div className='icons-glamping flex-wrap'>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faFirstdraft} size="3x"  color='#8CBF40'/> Terraza privada de 24m²</div>
                                <div className='flex-wrap'><FontAwesomeIcon icon={faUserGroup} size="3x" color='#0D6EFD' /> Adultos 2 </div>
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