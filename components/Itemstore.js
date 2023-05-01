import React from 'react'
import { Card } from 'react-bootstrap'
import Precios from './Precios'
import Image from 'next/image'

const Itemstore = ({ data, add }) => {
    const { nombre, descripcion, valor, img, id } = data
    return (
        <Card className='item-menu' style={{ textAlign: "center", overflow: "hidden" }}>
            <Card.Header>
                <Card.Title>
                    <h3>{nombre}</h3>
                </Card.Title>
            </Card.Header>
            

                {img ? <figure>
                    <Image src={img} width="100%" height="100%" alt="" style={{ objectFit: "cover", }} />
                </figure> : <></>}
                {descripcion ? <p style={{ textTransform: "" }}>{descripcion}</p>:null}

            <Card.Footer className='precios'>
                {typeof valor === "object" ? valor.map((element, index) => <Precios data={{ element, index }} key={index} id={id} add={add} />) : <button className='btn btn-outline-danger' style={{ justifySelf: "center" }} onClick={() => add({ data: { id, opcion: { descripcion: "sencillo", valor, amount: 1, id: 0 } } })}>{valor}</button>}
            </Card.Footer>
        </Card>
    )
}

export default Itemstore