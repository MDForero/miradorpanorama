import React, { useState } from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'
import Footer from '../../../components/Footer'
import Itemstore from '../../../components/Itemstore'
import data from "../../../images/menu"

const Menu = () => {
  const [menu, setMenu]=useState("")
  return (
    <div>
      <section className=''>
        <div className='category' id="sandiwch">
        </div>
        <button className='btn btn-primary' onClick={()=>setMenu("entradas")}>Entradas</button>
        <button className='btn btn-primary' onClick={()=>setMenu("patacones")}>Encocados</button>
        <button className='btn btn-primary' onClick={()=>setMenu("especiales")}>Especiales</button>
        <button className='btn btn-primary' onClick={()=>setMenu("")}>Todo</button>
       
        <div className="wrapper">
          {data.map((element) => menu ? menu === element.categoria ? <Itemstore data={element} /> : null : <Itemstore data={element} />)}
        </div>
      </section>
    </div>
  )
}

export default Menu