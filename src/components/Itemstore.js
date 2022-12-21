import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Itemstore = ({ data }) => {
    const { nombre, descripcion, valor, img } = data
    return (
        <article className='item-menu' style={{textAlign:"center"}}>
            <figure>
                <img src={img} width="100%" height="100%" alt="" style={{objectFit:"cover"}}/>
            </figure>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <div className='precios'>
                {typeof valor === "object" ? valor.map((element)=><>
                <p>{element.descripcion}</p>
                <button className='btn btn-outline-danger'>{element.value}</button>
                </>) : <button className='btn btn-outline-danger' style={{justifySelf:"center"}}>{valor}</button>}
            </div>
        </article>
    )
}

export default Itemstore