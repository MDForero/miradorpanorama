import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Precios from './Precios'

const Itemstore = ({ data, add}) => {
    const { nombre, descripcion, valor, img, id } = data
    return (
        <article className='item-menu' style={{textAlign:"center", overflow:"hidden"}}>
            <figure>
                <img src={img} width="100%" height="100%" alt="" style={{objectFit:"cover",}}/>
            </figure>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <div className='precios'>
                {typeof valor === "object" ? valor.map((element, index )=><Precios data={{element, index}} id={id} add={add} />) : <button className='btn btn-outline-danger' style={{justifySelf:"center"}} onClick={()=> add({data:{id, opcion:{descripcion:"sencillo" , valor, amount:1, id:0}}})}>{valor}</button>}
            </div>
        </article>
    )
}

export default Itemstore