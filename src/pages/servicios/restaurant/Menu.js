import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import Footer from '../../../components/Footer'
import Itemstore from '../../../components/Itemstore'
import data from "../../../data/menu"

const Menu = () => {
  return (
    <div>
      <section className="wrapper">
          {data.map((element)=><Itemstore data={element} />)}        
      </section>
        
    </div>
  )
}

export default Menu