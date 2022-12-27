import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartReducer, initialState } from '../../../components/cartReducers'
import Itemstore from '../../../components/Itemstore'
import TableArticulos from '../../../components/TableArticulos'

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
  const delete_one = (data) => dispatch({type:"delete_one", payload: data}) 

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
            <Table style={{textAlign:"center"}}>
            <thead>
              <th>#</th>
              <th>descripción</th>
              <th>opcion</th>
              <th>cantidad</th>
              <th>vr. unitario</th>
              <th>vr. total</th>
            </thead>
            {cart.map( element => <TableArticulos data={element} eliminar={delete_one}/>)}

            </Table>
          </Modal.Body>
          <Modal.Footer>
              <Link to="/checkout" className='btn btn-outline-danger' state={{cart}}>Pagar</Link>
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