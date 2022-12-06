import { faGlassCheers, faHotel, faMartiniGlass, faMountain, faPlateWheat, faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import mision from "../Panorama/188815862_1002804597133915_8165767116799593427_n.jpg"

const AboutUs = () => {
  return (
    <div>
      <main className='preview' id="aboutus">
        <div>
          <h1>Nosotros</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </main>
      <section style={{ textAlign: "justify" }}>

        <article className="platos">
          <figure>
            <img src={mision} width="500px" />
          </figure>
          <div className='info'>
            <h1 style={{ textAlign: "center" }}>Vision</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </article>

        <article className='platos'>
          <figure>
            <img src={mision} width="500px" />
          </figure>

          <div className='info'>
            <h1 style={{ textAlign: "center" }}>Misión</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </article>

      </section>
      {/* <section className='center cards'>

        <article className='cardicon block '>
          <span><FontAwesomeIcon icon={faMartiniGlass} size="3x" /></span>
          <div>
            <center>
              <h3 >Pruebas</h3>
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


        <article className='cardicon block '>
          <div style={{ background: "gray", position: "absolute" }}>

            <span style={{ background: "gray" }}><FontAwesomeIcon icon={faGlassCheers} size="3x" /></span>
          </div>
          <div>
            <center>
              <h3>Pruebas</h3>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </center>
          </div>
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

      </section> */}
      <section>
        <div className='container-card'>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faHotel} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                </h3>
                <p>This is where I network and build my professional protfolio.</p>
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
                  <a href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
                </h3>
                <p>This is where I read news and network with different social groups.</p>
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
                  <a href="https://github.com/atom888" target="_blank">atom888</a>
                </h3>
                <p>This is where I share code and work on projects.</p>
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
                  <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                </h3>
                <p>This is where I network and build my professional protfolio.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <span className="i"><FontAwesomeIcon icon={faPlateWheat} /></span>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3>
                  <a href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
                </h3>
                <p>This is where I read news and network with different social groups.</p>
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
                  <a href="https://github.com/atom888" target="_blank">atom888</a>
                </h3>
                <p>This is where I share code and work on projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default AboutUs