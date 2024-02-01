'use client'
import { faFirstdraft, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBed, faCampground, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import Image from 'next/image'

const Articulos = () => {
    const [image, setImage] = useState('/Images/Glamping/20231110_170748.jpeg')

    return (
        <>
            <h1>EcoGlamping suite</h1>
            <div className='Container'>
                <div className='flex-wrap-start'>
                    <div className='lg:w-1/2 h-full'>
                        <figure className='w-full  '> 
                            <Image loading='lazy' src={image} width={0} height={0} className='h-full w-full object-cover' />
                        </figure>
                        <div className='flex justify-center items-center gap-2'>
                            <div onMouseOver={() => setImage('/Images/Glamping/20231110_170748.jpeg')}><Image loading='lazy' src={'/Images/Glamping/20231110_170748.jpeg'} alt="" width={0} height={0} className='w-48' /></div>
                            <div onMouseOver={() => setImage('/Images/Glamping/20231110_171303.jpeg')}><Image loading='lazy' src={'/Images/Glamping/20231110_171303.jpeg'} alt="" width={0} height={0} className='w-48' /></div>
                            <div onMouseOver={() => setImage('/Images/Glamping/20231110_171411.jpeg')}><Image loading='lazy' src={'/Images/Glamping/20231110_171411.jpeg'} alt="" width={0} height={0} className='w-48' /></div>
                            <div onMouseOver={() => setImage('/Images/Glamping/20231110_171441.jpeg')}><Image loading='lazy' src={'/Images/Glamping/20231110_171441.jpeg'} alt="" width={0} height={0} className='w-48' /></div>
                        </div>
                    </div>
                    <div className='w-600 descripcion-glamping'>

                        <section className='flex justify-evenly'>
                            <p><strong>Valor noche:</strong>  350000 cop</p>
                            <a href="http://wa.me/+573219251480" className='btn btn-outline-success flex '><strong>Reserva ya </strong>  <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                        </section>
                        <section className='flex flex-wrap justify-center max-w-md gap-8'>                                <div className='flex flex-col items-center w-44'><FontAwesomeIcon icon={faBed} size="3x" color='#0D6EFD' /> Cama King 2x2</div>
                                <div className='flex flex-col items-center w-44'><FontAwesomeIcon icon={faCampground} size="3x" color='#8CBF40' /> Plataforma privada de 40m²</div>
                                <div className='flex flex-col items-center w-44'><FontAwesomeIcon icon={faFirstdraft} size="3x" color='#8CBF40' /> Terraza privada de 24m²</div>
                                <div className='flex flex-col items-center w-44'><FontAwesomeIcon icon={faUserGroup} size="3x" color='#0D6EFD' /> Adultos 2 </div>
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