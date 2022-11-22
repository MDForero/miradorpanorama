import { faGlassCheers, faHotel, faMartiniGlass, faMountain, faPlateWheat, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import mision from "../Panorama/188815862_1002804597133915_8165767116799593427_n.jpg"

const AboutUs = () => {
  return (
    <div>
      <main className='general' id="aboutus">
        <div>
          <h1>Nosotros</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </main>
      <section className='center' id="vision">
        <div className="area">
          <div className="inline block">
            <div>
              <figure>
                <img src={mision} width="500px" />
              </figure>
            </div>
            <div>
              <h1>Vision</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>
      </section>
      <section className='center' id="mision">

        <div className="area" >
          <div className='inline block'>
            <div>
              <h1>Misión</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div>
              <figure>
                <img src={mision} width="500px" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className='center container'>
        <div className='block'>
          <div className='inline block'>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faMartiniGlass} size="3x" /></span>
              <div>
                <center>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </center>
              </div>
            </article>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faMountain} size="3x" /></span>
              <div>
                <center>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </center>
              </div>
            </article>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faPlateWheat} size="3x" /></span>
              <div>
                <center>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </center>
              </div>
            </article>
          
          </div>
          <div className='inline block'>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faGlassCheers} size="3x" /></span>
              <center>
                <div>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </center>
            </article>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faUtensils} size="3x" /></span>
              <div>
                <center>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </center>
              </div>
            </article>

            <article className='cardicon block '>
              <span><FontAwesomeIcon icon={faHotel} size="3x" /></span>
              <div>
                <center>
                  <h3>Pruebas</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </center>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs