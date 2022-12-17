import { faGlassCheers, faHotel, faMartiniGlass, faMountain, faPeopleGroup, faPlateWheat, faTent, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import mision from "../images/188815862_1002804597133915_8165767116799593427_n.jpg"
import logo from "../images/logo.png"

const AboutUs = () => {
  return (
    <div>
      <main className='preview' id="aboutus">
        <div>
          <img src={logo} alt="el Mirador panorama" width="40%"/>
        </div>
      </main>
      <section style={{ textAlign: "justify" }}>

        <article className="platos">
          <figure>
            <img src={mision} width="500px" />
          </figure>
          <div className='info'>
            <h1 style={{ textAlign: "center" }}>Vision</h1>
            <p>Somos una empresa que se dedica al turismo ecológico en Colombia, contamos con un gran mirador ubicado en el municipio de Monterrey departamento de Casanare, el cual es una referencia turística del municipio. Nos especializamos en la prestación del servicio de alojamiento ecológico, atractivos infantiles y servicios de alimentación dentro del lugar.</p><p>
            Buscamos que nuestras instalaciones motiven a los visitantes a encontrar un destino turístico con gran identidad cultural dentro del municipio de monterrey, explorando nuevos espacios abiertos alrededor de la naturaleza.</p>
          </div>
        </article>

        <article className='platos'>
          <figure>
            <img src={mision} width="500px" />
          </figure>

          <div className='info'>
            <h1 style={{ textAlign: "center" }}>Misión</h1>
            <p>El Mirador Panorama prestará servicios eco-turísticos en el municipio de Monterrey con un enfoque ambiental. socia y cultura, enalteciendo las maravillas con las que cuenta el predio cumpliendo con todos los lineamientos y requerimientos técnicos como empresa sostenible</p><p>En el 2026 <strong> EL MIRADOR PANORAMA</strong>  será una prestigiosa y reconocida empresa a nivel nacional e internacional por sus altos estándares de calidad y cumplimiento de sus requerimientos que giran en torno al respeto por la naturaleza, generando cientos de empleos a las comunidades locales.</p>
          </div>
        </article>

      </section>

      <section>
        <div className='container-card'>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faTent} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Glamping</a>
                </h3>
                <p>El glamping es para aquellos que quieren experimentar la naturaleza, pero sin renunciar a todos los lujos (¡y comodidades!) de un hogar..</p>
              </div>
            </div>
          </div>
          
         
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faMountain} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Lorem</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faPeopleGroup}  /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Familia</a>
                </h3>
                <p>Somos una empresa familiar y nos encanta lo que hacemos. Tenemos una gran variedad de opciones para que usted elija. Al venir a nuestro restaurante, disfrutará del mejor ambiente familiar.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faGlassCheers} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Celebraciones</a>
                </h3>
                <p>Celebre todo tipo de ocasiones en nuestro establecimiento. Tenemos un ambiente agradable y acogedor. Estamos disponibles para fiestas, eventos corporativos, cumpleaños, aniversarios, compromisos y bodas.</p>
              </div>
            </div>
          </div> 
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faMartiniGlass} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Bebidas</a>
                </h3>
                <p>Disfruta de una deliciosa sangría viendo la puesta de sol sobre la cordillera oriental</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faUtensils} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Un buen plato</a>
                </h3>
                <p>Nuestra variedad de platos ofrece las mejores opciones para todos los gustos y paladares. Con una emocionante mezcla de sabores y texturas</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default AboutUs