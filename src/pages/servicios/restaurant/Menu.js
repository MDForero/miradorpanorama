import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { cartReducer, initialState } from '../../../components/cartReducers'
import Itemstore from '../../../components/Itemstore'

const Menu = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [menu, setMenu] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { products, cart, total } = state

  const addtocart = (data) => {
    dispatch({ type: "add_to_cart", payload: data })
  }
  console.log(cart)
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow} className="cart">
          {cart.length ? <div>{cart.length}</div> : <></>}
          <FontAwesomeIcon icon={faCartShopping} size="1x"/>
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
            <thead>
              <th>#</th>
              <th>descripción</th>
              <th>opcion</th>
              <th>cantidad</th>
              <th>vr. unitario</th>
              <th>vr. total</th>
            </thead>
            {cart.map((element) =>{ 
              const {id, nombre, opciones} = element
              let row = opciones.length
            return(<>
            <tr>
              <td rowSpan={row+1}>{id}</td>
              <td rowSpan={row+1}>{nombre}</td>
            </tr>
              {opciones.map((item)=><tr>
              <td>{item.descripcion}</td>
              <td>{item.amount}</td>
              <td>{item.valor}</td>
              <td>{item.valor * item.amount}</td>
              </tr>)}
            </>)}
            )}
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <section className=''>
        <div className='category' id="sandiwch">
        </div>
        <button className='btn btn-primary' onClick={() => setMenu("entradas")}>Entradas</button>
        <button className='btn btn-primary' onClick={() => setMenu("patacones")}>Encocados</button>
        <button className='btn btn-primary' onClick={() => setMenu("especiales")}>Especiales</button>
        <button className='btn btn-primary' onClick={() => setMenu("")}>Todo</button>

        <div className="wrapper">
          {products.map((element, index) => menu ? menu === element.categoria ? <Itemstore data={element} key={element.id} add={addtocart} /> : null : <Itemstore data={element} key={element.id} add={addtocart} />)}
        </div>
      </section>
    </div>
  )
}

export default Menu