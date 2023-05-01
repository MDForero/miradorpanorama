import { faFirstdraft, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCampground, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import img1 from "../public/IMG-20230114-WA0002.jpg"
import img2 from "../public/IMG-20230114-WA0004.jpg"
import img3 from "../public/IMG-20230114-WA0009.jpg"
import img4 from "../public/IMG-20230114-WA0013.jpg"
import Image from 'next/image'

const Articulos = () => {
    const [image, setImage] = useState(img1)
    
    return (
        <>
            <h1>EcoGlamping suite</h1>
            <div className='Container'>
                <div className='flex-wrap-start'>
                    <div className='w-400'>
                        <figure className='w-[400px] h-[400px]'>
                            <Image src={image} alt="" width={400} height={400} className='object-cover' />
                        </figure>
                        <div className='flex-wrap option-img'>
                            <div onMouseOver={() => setImage(img1)} ><Image src={img1} alt="" width={80} height={80} /></div>
                            <div onMouseOver={() => setImage(img2)}><Image src={img2} alt="" width={80} height={80} /></div>
                            <div onMouseOver={() => setImage(img3)}><Image src={img3} alt="" width={80} height={80} /></div>
                            <div onMouseOver={() => setImage(img4)}><Image src={img4} alt="" width={80} height={80} /></div>
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
                            <section>
                                <h3>La reserva incluye</h3>
                                <ul className='list'>
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
                            <h3>Observaciones</h3>
                            <li>Todo adicional se solicita por WhatsApp después de reservar la suite. (Cena romantica, decoración, pasadías)</li>
                            <li>Cada huesped adicional tendrá un costó de 90.000 COP incluye desayuno, hasta un máximo de cuatro personas por suite</li>
                        </section>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Articulos