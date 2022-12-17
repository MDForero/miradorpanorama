import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Itemstore = ({ data }) => {
    const { nombre, descripcion, valor, img } = data
    return (
        <Card>
            <Card.Header>
                <Card.Title>{nombre}</Card.Title>
            </Card.Header>
            <Card.Body style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px" }}>
                <div style={{width:"100px"}}>
                    <Card.Img src={img} variant="top" style={{ objectFit: "cover", width:"100%" }} />
                </div>
                <Card.Text>
                    <p>{descripcion}</p>
                </Card.Text>
                <div>

                    {typeof valor === "object" ? valor.map(({ descripcion, value }) => <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>{descripcion}</p>
                        <Button variant="danger">{value}</Button>
                    </div>
                    ) :
                        <div>
                            <Button variant="danger">{valor}</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Itemstore