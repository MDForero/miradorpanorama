import { faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import glamping from "../images/glampingintroduccion.jpg"
import { Imagen } from './Modal'
import logo from "../images/logo.png"
import { imgs } from '../images/glamping/glamping'


const Glamping = () => {
    const [modalShow, setModalShow] = useState(false)
    const [modalImg, setModalImg] = useState(null)
    const prueba = ({ img }) => {
        setModalShow(true)
        setModalImg(img)
    }
    return (
        <div>
            <div id="glamping">
                <div className='ov-white'>
                    <div className='preview hv-100'>
                        <img src={logo} alt="el Mirador panorama" width="300px" />
                    </div>
                    <div className='center hv-100'>
                        <h1 className='animate__animated animate__pulse' >Hospedarte con nosotros es una experiencia inolvidable</h1>
                    </div>
                    <Container className='center'>
                        <section className='padding-10 hv-100 center'>
                            <div>
                                <p className='descripciones' style={{ textAlign: "justify", fontSize: "2.2rem", maxWidth: "600px" }}>En nuestros ECOLOGING ofrecemos unservicio exclusivo y personalizado, brindando a nuestros visitantes una estadía en medio de la naturaleza, con un concepto único de glamping tipo safari, logrando generar experiencias únicas he inolvidables para aquellas personas que buscan escapar de la rutina de la ciudad y desean disfrutar de ambientes rodeados de montañas, bosques, ríos y un piedemonte llanero, además complementamos su estadía Con un servicios</p>
                            </div>
                        </section>
                    </Container>
                </div>
            </div>
            <section className='grid-gallery padding-10 bg-gray' >
                <Imagen show={modalShow} onHide={() => setModalShow(false)} img={modalImg} />
                {imgs.map(element => <>
                    <div className='grid-gallery__item' href="#">
                        <img src={element} className="grid-gallery__image" style={{ margin: "0px auto", cursor: "pointer" }} onClick={() => prueba({ img: element })} />
                    </div></>)}

            </section>
        </div>
    )
}

export default Glamping