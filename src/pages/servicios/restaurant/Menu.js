import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import Footer from '../../../components/Footer'
import Itemstore from '../../../components/Itemstore'
import data from "../../../Panorama/menu"

const Menu = () => {
  return (
    <div>
      <section className=''>

        <div className='category' id="entradas">
        </div>
        <div className="wrapper">
          {data.map((element) => "entradas" === element.categoria ? <Itemstore data={element} /> : null)}
        </div>
      </section>
      <section>
        <div className='category' id="sandiwch">
        </div>
        <div className="wrapper">
          {data.map((element) => "sandiwch" === element.categoria ? <Itemstore data={element} /> : null)}
        </div>
      </section>
      <section>
        <div className='category' id="patacones">
        </div>
        <div className="wrapper">
          {data.map((element) => "patacones" === element.categoria ? <Itemstore data={element} /> : null)}
        </div>
      </section>
      <section>
        <div className='category' id="especiales">
        </div>
        <div className="wrapper">
          {data.map((element) => "especiales" === element.categoria ? <Itemstore data={element} /> : null)}
        </div>
      </section>
    </div>
  )
}

export default Menu