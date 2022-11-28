import React from 'react'
import patacones from "../../../Panorama/Canastas de Patacones.jpg"

const Inicio = () => {
  return (
    <div>
      <main className='preview' id="restaurante">
        <h1>Restaurante</h1>
      </main>
      <section>

        <article className='platos'>
          <figure>
            <img src={patacones} alt='' />
            <figcaption>Patacones</figcaption>
          </figure>
          <div className='info'>
            <center>
              <h3>Patacones</h3>
            </center>
            <p>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </i>
            </p>
          </div>
        </article>

        <article className='platos'>
          <figure>
            <img src={patacones} alt='' height="100%" />
            <figcaption>Patacones</figcaption>
          </figure>
          <div className='info'>
            <center>
              <h3>Patacones</h3>
            </center>
            <p>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </i>
            </p>
          </div>
        </article>

        <article className='platos'>
          <figure>
            <img src={patacones} alt='' height="100%" />
            <figcaption>Patacones</figcaption>
          </figure>
          <div className='info'>
            <center>
              <h3>Patacones</h3>
            </center>
            <p>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </i>
            </p>
          </div>
        </article>
        
        <article className='platos'>
          <figure>
            <img src={patacones} alt='' height="100%" />
            <figcaption>Patacones</figcaption>
          </figure>
          <div className='info'>
            <center>
              <h3>Patacones</h3>
            </center>
            <p>
              <i>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </i>
            </p>
          </div>
        </article>

      </section>
    </div>
  )
}

export default Inicio