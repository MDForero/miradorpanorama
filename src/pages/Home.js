import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../Panorama/AdobeStock_282952309-.jpg"
import img2 from "../Panorama/AdobeStock_282952309.jpg"
import img3 from "../Panorama/AdobeStock_329197000.jpg"
import logo from "../Panorama/logo.png"

const Home = () => {
  return (
    <div>
      <main className='preview' id='inicio'>
        <div>
          <img src={logo} alt="el Mirador panorama" width="400px"/>
        </div>
      </main>
      <section className='center' id="galeria">
        <div>
          <div>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                  height="400px"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  height="400px"
                />

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                  height="400px"
                />

                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel></div>
        </div>
      </section>
    </div>
  )
}

export default Home