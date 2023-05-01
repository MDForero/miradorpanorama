import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from "../public/logo.png"
import { imgs } from '../public/glamping'
import Articulos from '../components/Articulos'
import Image from 'next/image'
import Layout from '../components/Layout'
import  Head  from 'next/head'


const glamping = () => {
    return (
        <Layout>
            <Head>
                <title>Glamping en Monterrey Casanare</title>
            </Head>
            <div id="glamping">
                <div className='ov-white'>
                    <div className='preview hv-100'>
                        <Image src={logo} alt="el Mirador panorama" width={300} />
                    </div>
                    <div className='center hv-100'>
                        <h1 className='' >Hospedarte con nosotros es una experiencia inolvidable</h1>
                    </div>
                    <Container className='center'>
                        <section className='padding-10 hv-100 center'>
                            <div>
                                <p>En nuestros ECOLOGING ofrecemos un servicio exclusivo y personalizado, brindando a nuestros visitantes una estadía en medio de la naturaleza, con un concepto de glamping tipo safari, logrando generar experiencias únicas he inolvidables para aquellas personas que buscan escapar de la rutina de la ciudad y desean disfrutar de ambientes rodeados de montañas, bosques, ríos y un piedemonte llanero, además complementamos su estadía con un servicio excepcional</p>
                            </div>
                        </section>
                    </Container>
                </div>
            </div>
            <Articulos/>        
            <section className='grid-gallery padding-10 bg-gray' >
                {imgs.map((element, index)=>
                    <div className='grid-gallery__item' key={index}>
                        <Image src={element} alt='' className="grid-gallery__image my-0 mx-auto cursor-pointer" />
                    </div>)}

            </section>
        </Layout>
    )
}

export default glamping