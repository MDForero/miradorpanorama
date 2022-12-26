import React, { useState } from 'react'
import { Card, Container, FloatingLabel, Form, Table } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import TableArticulos from '../components/TableArticulos'

const Checkout = () => {
  let location = useLocation()
  let nombre, telefono, direccion
  const { cart } = location.state
  console.log(cart)
  let total = 0
  cart.forEach(element => {
    element.opciones.map(opcion => total += opcion.valor * opcion.amount)
  })
  const enviar = () => {
    const pedir = document.querySelector("#enviar")
    let pedido = `https://api.whatsapp.com/send?phone=573212079857&text=Nombre:%0A%20%20${nombre.value}%0ADireccion:%0A%20%20${direccion.value}%0A%20%20Telefono:%0A${telefono.value}%0A`
    cart.forEach(element => {
      const {nombre, opciones}=element
        pedido += `${nombre}%20${element.opciones.map(item =>`${item.descripcion}%20${item.amount}%20${item.amount*item.valor}%0A`).join()}%0A`
    });
    pedido += `Total%20%20${total}`
    pedir.setAttribute("href", pedido)
    pedir.click()
  }


    return (
      <div>
        {cart.length ? <Container>
          <h1 style={{ margin: "50px auto", textAlign: "center" }}>Carrito</h1>

          <div className='checkout' >
            <Card>
              <Card.Header><Card.Title>Información de contacto</Card.Title></Card.Header>
              <Card.Body><Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre"
                >

                  <Form.Control type="text" ref={node => nombre = node} placeholder="Nombre" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Celular">
                  <Form.Control type="tel" placeholder="310XXXXXXX" ref={node => telefono = node} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Dirección">
                  <Form.Control type="text" placeholder="Dirección" ref={node => direccion = node} />
                </FloatingLabel>
              </Form></Card.Body>
            </Card>
            <Card>
              <Card.Header><Card.Title>Información del pedido</Card.Title></Card.Header>
              <Table bordered style={{ textAlign: "center", margin: "auto auto", alignSelf: "center", justifySelf: "right" }}>
                <thead>
                  <th>#</th>
                  <th>descripción</th>
                  <th>opcion</th>
                  <th>cantidad</th>
                  <th>vr. unitario</th>
                  <th>vr. total</th>
                </thead>
                <tbody>
                  {cart.map(element => <TableArticulos data={element} />)}
                </tbody>
              </Table>
            </Card>
            <Card style={{ width: "90%", margin: "0px auto" }}>
              <Card.Header><Card.Title>Total</Card.Title></Card.Header>
              <Table bordered>
                <tr>
                  <th>Subtotal</th>
                  <td> {total}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td> {total}</td>
                </tr>
              </Table>
              <button className='btn btn-outline-danger' style={{ float: "right" }} onClick={()=>enviar()} ><strong>Pagar</strong></button>
            </Card>
          </div>
          {/* <Card >
            <Card.Header>
              <Card.Title>                        Información de contacto                        </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre"
                  className="mb-3"
                >

                  <Form.Control type="text" ref={node => nombre = node} placeholder="Nombre" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Celular">
                  <Form.Control type="tel" placeholder="310XXXXXXX" ref={node => telefono = node} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Dirección">
                  <Form.Control type="text" placeholder="Dirección" ref={node => direccion = node} />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card> */}
        </Container> : <h1>carrito vacío vuelva al menú</h1>}
        <a id="enviar" target="_blank"></a>
      </div>
    )
  }

  export default Checkout