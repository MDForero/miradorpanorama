import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import restaurante from "../Panorama/AdobeStock_282952309-.jpg"
import glamping from "../Panorama/AdobeStock_329197000.jpg"

const Services = () => {
  return (
    <div>
      <main className='general' id="services" >
        <div>

          <h1>servicios</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
      <section>

        <Link to="/glamping">
          <figure>
            <img src={glamping} width="200px" />
          </figure>
        </Link>
        <Link to="/restaurante">
          <figure>
            <img src={restaurante} alt="imagen de restaurante que redirecciona a " width="200px" />
          </figure>
        </Link>

      </section>
    </div>
  )
}

export default Services