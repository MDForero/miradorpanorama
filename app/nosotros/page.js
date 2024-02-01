import React from 'react'

import Image from 'next/image'

export const metadata = {
  title: "Nosotros",
}


const nosotros = () => {
  return (
            <>
    <main id="aboutus">
            <div className="preview nosotros">
              <Image loading='lazy' src='/logo.png' alt="el Mirador panorama" width={0} height={0} className='md:w-96 w-60' />
            </div>

      </main>
      <section className='space-y-32 my-32 p-2'>

        <article className="flex justify-evenly items-center flex-wrap space-y-12">
          <figure>
            <Image loading='lazy' src='/compressed__DSC8490.jpg' alt="" width={0} height={0} className='md:h-96 w-full lg:rounded-md shadow-2xl shadow-emerald-700 rounded-r-full rounded-t-full' />
          </figure>
          <div className='info'>
            <h1 style={{ textAlign: "center" }}>Vision</h1>
            <p >Somos una empresa que se dedica al turismo ecológico en Colombia, contamos con un gran mirador ubicado en el municipio de Monterrey departamento de Casanare, el cual es una referencia turística del municipio. Nos especializamos en la prestación del servicio de alojamiento ecológico, atractivos infantiles y servicios de alimentación dentro del lugar. Buscamos que nuestras instalaciones motiven a los visitantes a encontrar un destino turístico con gran identidad cultural dentro del municipio de monterrey, explorando nuevos espacios abiertos alrededor de la naturaleza.</p>
          </div>
        </article>

        <article className='flex justify-evenly items-center md:flex-row-reverse  flex-wrap space-y-12'>
          <figure>
            <Image loading='lazy' src='/compressed__DSC8505.jpg' alt="" width={0} height={0} className='md:h-96 w-full lg:rounded-md shadow-2xl shadow-emerald-700 rounded-r-full rounded-t-full' />
          </figure>

          <div className='info'>
            <h1 >Misión</h1>
            <p >El Mirador Panorama prestará servicios eco-turísticos en el municipio de Monterrey con un enfoque ambiental. socia y cultura, enalteciendo las maravillas con las que cuenta el predio cumpliendo con todos los lineamientos y requerimientos técnicos como empresa sostenible
              En el 2026 <strong> EL MIRADOR PANORAMA</strong>  será una prestigiosa y reconocida empresa a nivel nacional e internacional por sus altos estándares de calidad y cumplimiento de sus requerimientos que giran en torno al respeto por la naturaleza, generando cientos de empleos a las comunidades locales.</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default nosotros