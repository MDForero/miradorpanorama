import React from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from "../images/AdobeStock_282952309-.jpg"
import img2 from "../images/AdobeStock_282952309.jpg"
import img3 from "../images/AdobeStock_329197000.jpg"
import data from '../images/galeria/data'
import logo from "../images/logo.png"

const Home = () => {
  return (
    <div>
      <main className='preview' id='inicio'>
        <div>
          <img src={logo} alt="el Mirador panorama" width="40%"/>
        </div>
      </main>
      <section className='center' id="galeria">
        <div>
          <div>
            <Carousel fade >
              {data.map((element)=><Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={element}
                  width="100%"
                  height="100%"
                  style={{objectFit:"cover"}}
                />
              </Carousel.Item>)}
            </Carousel></div>
        </div>
      </section>
    </div>
  )
}

export default Home