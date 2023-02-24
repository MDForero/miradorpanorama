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
                <div className='flex-wrap'>
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
                    <div>
                        
                        <div className='flex-wrap'>
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
                        </div>
                    </div>

                </div>
                <h4>Observaciones</h4>
                <p>Todo adicional se solicita por WhatsApp después de reservar la suite</p>
                <p>Cada huesped adicional tendrá un costó de 90.000 COP incluye desayuno, hasta un máximo de cuatro personas por suite</p>


            </div>
        </>
    )
}

export default Articulos