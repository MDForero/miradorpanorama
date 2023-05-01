import React, { useContext, useEffect, useReducer } from 'react'
import { Card, Container, FloatingLabel, Form, Table } from 'react-bootstrap'
import { Store, cartReducer, initialState } from '../components/cartReducers'
import TableArticulos from '../components/TableArticulos'
import cartEmpty from "../public/cartEmpty.jpg"
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Checkout = () => {
  let nombre, telefono, direccion

  const {state, dispatch} = useContext(Store)
  const { cart } = state
  console.log(cart)
  const delete_one = (data) => dispatch({ type: "delete_one", payload: data })

  let total = 0
  cart.forEach(element => {
    element.opciones.map(opcion => total += opcion.valor * opcion.amount)
  })
  const enviar = () => {
    const pedir = document.querySelector("#enviar")
    let pedido = `https://api.whatsapp.com/send?phone=573202336531&text=Nombre:%0A%20%20${nombre.value}%0ADireccion:%0A%20%20${direccion.value}%0ATelefono:%0A%20%20${telefono.value}%0A`
    cart.forEach(element => {
      const { nombre, opciones } = element
      pedido += `${nombre}:%0A${opciones.map(item => `%20%20%20%20${item.descripcion}%20${item.amount}%20${item.amount * item.valor}`).join("%0A")}%0A`
    });
    pedido += `Total%20%20${total}`
    pedir.setAttribute("href", pedido)
    pedir.click()
  }

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("myCart")))
  }, [])

  return (
    <Layout>
      {cart.length ? <Container>
        <h1 style={{ margin: "50px auto", textAlign: "center" }}>Carrito</h1>

        <div className='checkout' >
          <Card>
            <Card.Header><Card.Title>Información del pedido</Card.Title></Card.Header>
            <Table bordered responsive style={{ textAlign: "center", margin: "auto auto", alignSelf: "center", justifySelf: "right" }}>
              <thead>
                <th></th>
                <th>#</th>
                <th>descripción</th>
                <th>opcion</th>
                <th>cantidad</th>
                <th>vr. unitario</th>
                <th>vr. total</th>
              </thead>
              <tbody>
                {cart.map((element, index) => <TableArticulos data={element} key={index} eliminar={delete_one} />)}
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
            <button className='btn btn-outline-danger float-rght' style={{ float: "right" }} onClick={() => enviar()} ><strong>Hacer pedido</strong></button>
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
      </Container> : <Container className="checkoutEmpty">
        <h1>Carrito vació</h1>
        <Image src={cartEmpty} alt="" />
        <Link href="/menu" className='btn btn-outline-success'><h1>Volver al menú</h1></Link>
      </Container>}
      <a id="enviar" target="_blank" href=""></a>
    </Layout>
  )
}

export default Checkout