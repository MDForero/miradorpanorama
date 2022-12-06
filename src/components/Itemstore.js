import React from 'react'
import { Card } from 'react-bootstrap'

const Itemstore = ({ data }) => {
    const { nombre, descripcion, valor, img } = data
    return (
        <Card>
            <Card.Header>
                <Card.Title>{nombre}</Card.Title>
            </Card.Header>
            <Card.Img src={img} variant="top" width="200px" height="200px" style={{objectFit:"cover"}}/>
            <Card.Body>
                <Card.Text>
                    <p>{descripcion}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {typeof valor === "object" ? valor.map(({ descripcion, value }) => <div>
                    <p>{descripcion}</p>
                    <p>{value}</p>
                </div>
                ) :
                    <div>
                        <p>{valor}</p>
                    </div>}
            </Card.Footer>
        </Card>
    )
}

export default Itemstore