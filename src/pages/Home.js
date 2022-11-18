import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../Panorama/AdobeStock_282952309-.jpg"
import img2 from "../Panorama/AdobeStock_282952309.jpg"
import img3 from "../Panorama/AdobeStock_329197000.jpg"

const Home = () => {
  return (
    <div>
      <main className='general' id='inicio'>
        <div>
          <h1>Mirador Panorama</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </main>
      <section className='center'>
        <div>
          <h3>Carrousel</h3>
          <div><Carousel fade>
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