import React from 'react'
import mision from "../images/compressed__DSC8490.jpg"
import logo from "../images/logo.png"
import vision from "../images/glamping.jpg"

const AboutUs = () => {
  return (
    <div>
      <main id="aboutus">
        <div className='ov-white'>
          <div>
            <div style={{textAlign:"center"}}>
              <img src={logo} alt="el Mirador panorama" width="40%" />
            </div>
            <section style={{ textAlign: "justify" }}>

              <article className="black platos">
                <figure>
                  <img src={mision} width="500px" />
                </figure>
                <div className='info'>
                  <h1 style={{ textAlign: "center" }}>Vision</h1>
                  <p className='descripciones'>Somos una empresa que se dedica al turismo ecológico en Colombia, contamos con un gran mirador ubicado en el municipio de Monterrey departamento de Casanare, el cual es una referencia turística del municipio. Nos especializamos en la prestación del servicio de alojamiento ecológico, atractivos infantiles y servicios de alimentación dentro del lugar. Buscamos que nuestras instalaciones motiven a los visitantes a encontrar un destino turístico con gran identidad cultural dentro del municipio de monterrey, explorando nuevos espacios abiertos alrededor de la naturaleza.</p>
                </div>
              </article>

              <article className='black platos'>
                <figure>
                  <img src={vision} width="500px" />
                </figure>

                <div className='info'>
                  <h1 style={{ textAlign: "center" }}>Misión</h1>
                  <p className="descripciones">El Mirador Panorama prestará servicios eco-turísticos en el municipio de Monterrey con un enfoque ambiental. socia y cultura, enalteciendo las maravillas con las que cuenta el predio cumpliendo con todos los lineamientos y requerimientos técnicos como empresa sostenible
                    En el 2026 <strong> EL MIRADOR PANORAMA</strong>  será una prestigiosa y reconocida empresa a nivel nacional e internacional por sus altos estándares de calidad y cumplimiento de sus requerimientos que giran en torno al respeto por la naturaleza, generando cientos de empleos a las comunidades locales.</p>
                </div>
              </article>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutUs