import { Container } from 'react-bootstrap'
import { imgs } from '../../public/glamping'
import Articulos from '../components/Articulos'
import Image from 'next/image'
import Features from '../components/Features'

export const metadata = {
    title: "Glamping",
}

const glamping = () => {
    return (
        <section className='space-y-12 mb-12'>
            <div id="glamping">
                <div className='ov-white space-y-48 pb-12'>
                    <div className='preview flex flex-col justify-center items-center h-screen'>
                        <Image loading='lazy' src={'/panorama.png'} alt="el Mirador panorama" width={300} height={300} />
                        <h1 className='' >Hospedarte con nosotros es una experiencia inolvidable</h1>
                    </div>
                </div>
            </div> 

            <Features/> 
            <Articulos />
            <section className='grid-gallery' >
                {imgs.map((element, index) =>
                    <div className='grid-gallery__item' key={index}>
                        <Image loading='lazy' src={element} alt='' width={0} height={0} className="grid-gallery__image my-0 mx-auto cursor-pointer w-full h-full" />
                    </div>)}

            </section>
        </section>
    )
}

export default glamping