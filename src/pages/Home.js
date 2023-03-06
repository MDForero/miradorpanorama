import React, { useEffect, useRef, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../images/AdobeStock_282952309-.jpg"
import img2 from "../images/AdobeStock_282952309.jpg"
import img3 from "../images/AdobeStock_329197000.jpg"
import data from '../images/galeria/data'
import logo from "../images/logo.png"
import { faGlassCheers, faHotel, faMartiniGlass, faMountain, faPeopleGroup, faPlateWheat, faTent, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menu from '../images/menu'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>
      <main className='inicio' >
        <div className='preview hv-100'>
          <img src={logo} alt="el Mirador panorama" width="300px" />
        </div>

        <section className='white mw-800 margin-center center hv-100'>
          <div>
            <h1><strong>Somos</strong></h1>
            <p className="descripciones ">El Mirador Panorama es un hotel, restaurante y albergue ecológico de montaña situado a la orilla del río. Desde aquí se puede disfrutar de las vistas más espectaculares sobre el río tua y sus alrededores, a vista de pájaro de Monterrey.</p>
          </div>
        </section>
      </main>

      <section className='destacados'>
        {/* En proceso de actualización se esta buscando poner un menú de destacados */}
        
          <h1>Lo más destacado</h1>
          <p style={{ maxWidth: "900px" }} className="descripciones">Contamos con una amplia variedad de platos, desde los favoritos de siempre a creaciones nuevas y mejoradas, entre los cuales destacan:</p>
        <div className='margin-center'>
          <div className='wrapper'>
            {menu.filter(element => element.destacados === true).map(element => <article className='destacado'>
              <figure style={{ overflow: "hidden", minHeight: "23rem", width: "100%" }}>
                <img src={element.img} alt='' width="100%" height="100%" style={{ objectFit: "cover", }} />
              </figure>
              <div className='destacadostext'>
                <div>
                  <h2>{element.nombre}</h2>
                  <p>{element.descripcion}</p>
                </div>
                <Link className='btn btn-success' to="menu"> Ordenar</Link>
              </div>
            </article>)}
          </div>
        </div>
      </section>
      <section className='destacamos inicio'>
        <h1><strong>El mirador panorama es:</strong></h1>
        <div className='container-card container' >
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
                <p style={{ fontSize: "1rem" }}>El glamping es para aquellos que quieren experimentar la naturaleza, pero sin renunciar a todos los lujos (¡y comodidades!) de un hogar..</p>
              </div>
            </div>
          </div>



          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="" target="_blank">Familia</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Somos una empresa familiar y nos encanta lo que hacemos. Tenemos una gran variedad de opciones para que usted elija. Al venir a nuestro restaurante, disfrutará del mejor ambiente familiar.</p>
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
                <p style={{ fontSize: "1rem" }}>Celebre todo tipo de ocasiones en nuestro establecimiento. Tenemos un ambiente agradable y acogedor. Estamos disponibles para fiestas, eventos corporativos, cumpleaños, aniversarios, compromisos y bodas.</p>
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
                <p style={{ fontSize: "1rem" }}>Nuestra variedad de platos ofrece las mejores opciones para todos los gustos y paladares. Con una emocionante mezcla de sabores y texturas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='center' id="galeria">
          <div>
          <div>
            <Carousel fade >
              {data.map((element) => <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={element}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Carousel.Item>)}
            </Carousel></div>
        </div>
      </section>
    </div>
  )
}

export default Home