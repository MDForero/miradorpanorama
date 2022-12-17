import React from 'react'
import { Container } from 'react-bootstrap'
import logo from "../images/logo.png"
import { Link, Outlet } from 'react-router-dom'
import restaurante from "../images/AdobeStock_282952309-.jpg"
import glamping from "../images/AdobeStock_329197000.jpg"

const Services = () => {
  return (
    <div>
      <main className='preview' id="services" >
        <div>

          <img src={logo} alt="el Mirador panorama" width="40%" />

        </div>
      </main>

      <section className='center'>
        <div className="inline block">


          <Link to="/glamping">
            <figure className='figure' id='glampingimg'>
              <img src={glamping} className='img' />
              <center>

              </center>
            </figure>
          </Link>



          <Link to="/restaurante">
            <figure className='figure' id="restauranteimg">
              <img src={restaurante} alt="" className='img' />
              <center>

              </center>
            </figure>
          </Link>


        </div>
      </section>

    </div>
  )
}

export default Services