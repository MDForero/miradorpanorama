import { Carousel } from 'react-bootstrap'
import data from '../public/data'
import logo from "../public/logo.png"
import { faGlassCheers, faPeopleGroup,  faTent, faUtensils} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menu from '../public/menu'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import Head from "next/head"

const Index = () => {


  return (
    <Layout>
      <Head>
        <title>Mirador Panorama Monterrey</title>
      </Head>
      
      <main className='inicio' >
        <div className='preview hv-100'>
          <Image src={logo} alt="el Mirador panorama" width={300} />
        </div>

        <section className='white mw-800 margin-center center hv-100'>
          <div>
            <h1><strong>Somos</strong></h1>
            <p className="descripciones">EL MIRADOR PANORAMA ES UN LUGAR PARA TODA LA FAMILIA, DONDE ENCONTRARÁS AREA DE RESTAURANTE, ZONA INFANTIL Y ALOJAMIENTO TIPO GLAMPING, DESDE AQUI  PODRAS CONTEMPLAR EL RIO Y TODO EL PIE DE MONTE LLANERO, ADEMAS OBSERVARAS LA BIODIVERSIDAD DE FLORA Y FAUNA QUE RODEA LA REGIÓN.</p>
          </div>
        </section>
      </main>

      <section className='destacados'>
        {/* En proceso de actualización se esta buscando poner un menú de destacados */}
        
          <h1>Lo más destacado</h1>
          <p style={{ maxWidth: "900px" }} className="descripciones">Contamos con una amplia variedad de platos, desde los favoritos de siempre a creaciones nuevas y mejoradas, entre los cuales destacan:</p>
        <div className='margin-center w-full'>
          <div className='wrapper'>
            {menu.filter(element => element.destacados === true).map((element, index) => <article className='destacado' key={index} >
              <figure style={{ overflow: "hidden", minHeight: "23rem", width: "100%" }}>
                <Image src={element.img} alt='' width={400} height={400} style={{ objectFit: "cover", }} />
              </figure>
              <div className='destacadostext'>
                <div>
                  <h2>{element.nombre}</h2>
                  <p>{element.descripcion}</p>
                </div>
                <Link className='btn btn-success' href=""> Ordenar</Link>
              </div>
            </article>)}
          </div>
        </div>
      </section>
      <section className='destacamos inicio'>
        <h1><strong>El mirador panorama es:</strong></h1>
        <div className='container-card container' >
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><FontAwesomeIcon icon={faTent} /></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#">Glamping</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>El glamping es para aquellos que quieren experimentar la naturaleza, pero sin renunciar a todos los lujos (¡y comodidades!) de un hogar..</p>
              </div>
            </div>
          </div>



          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><FontAwesomeIcon icon={faPeopleGroup} /></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#">Familia</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Somos una empresa familiar y nos encanta lo que hacemos. Tenemos una gran variedad de opciones para que usted elija. Al venir a nuestro restaurante, disfrutará del mejor ambiente familiar.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><FontAwesomeIcon icon={faGlassCheers} /></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#" >Celebraciones</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Celebre todo tipo de ocasiones en nuestro establecimiento. Tenemos un ambiente agradable y acogedor. Estamos disponibles para fiestas, eventos corporativos, cumpleaños, aniversarios, compromisos y bodas.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><FontAwesomeIcon icon={faUtensils} /></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#" >Un buen plato</a>
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
              {data.map((element, index) => <Carousel.Item key={index} interval={2000}>
                <Image
                  className="d-block w-100"
                  src={element}
                  
                  alt=''
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Carousel.Item>)}
            </Carousel></div>
        </div>
      </section>
    </Layout>
  )
}

export default Index