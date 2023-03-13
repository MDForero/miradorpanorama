import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { cartReducer, initialState } from '../components/cartReducers'
import Itemstore from '../components/Itemstore'
import TableArticulos from '../components/TableArticulos'
import menuPdf from "../images/menu.pdf"

const Menu = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [menu, setMenu] = useState("entradas")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { products, cart, total } = state

  const addtocart = (data) => {
    dispatch({ type: "add_to_cart", payload: data })
  }
  const delete_one = (data) => dispatch({ type: "delete_one", payload: data })

  console.log(cart)
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow} className="cart">
          {cart.length ? <div>{cart.length}</div> : <></>}
          <FontAwesomeIcon icon={faCartShopping} size="1x" />
        </Button>

        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table style={{ textAlign: "center" }}>
              <thead>
                <th></th>
                <th>#</th>
                <th>descripción</th>
                <th>opcion</th>
                <th>cantidad</th>
                <th>vr. unitario</th>
                <th>vr. total</th>
              </thead>
              {cart.map(element => <TableArticulos data={element} eliminar={delete_one} />)}

            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/checkout" className='btn btn-outline-danger' state={{ cart }}>Pagar</Link>
          </Modal.Footer>
        </Modal>
      </>
      <section className=''>
        <main className='category'>
        <div style={{display:"inline-block"}}>
          <h1 style={{ textTransform: "capitalize" }} className="title-menu">{menu}</h1>
        </div>
        </main>
        <section className='botones'>
          <button className='btn btn-primary w-100' onClick={() => setMenu("entradas")}><h2>Entradas</h2></button>
          <button className='btn btn-success w-100' onClick={() => setMenu("encocados")}><h2>Encocados</h2></button>
          <button className='btn btn-danger w-100' onClick={() => setMenu("especiales")}><h2>Especiales</h2></button>
          <button className='btn btn-warning w-100' onClick={() => setMenu("sandiwch")}><h2>Sandiwch</h2></button>
          {/* <a href={menupdf} download="menu.pdf" className='btn btn-primary2>pdf<h1>></</h1a> */}
          <button className='btn btn-secondary w-100' onClick={() => setMenu("postres")}><h2>Postres</h2></button>
          <button className='btn btn-info w-100' onClick={() => setMenu("bebidas")}><h2>Bebidas</h2></button>
        </section>
        <section className='container'>
          <div className='w-600 m-center'>
          <a href={menuPdf} className="btn btn-danger btn-pdf " download style={{fontSize:"3rem"}}>Menú <FontAwesomeIcon icon={faFilePdf} size=""/></a>
          </div>
        </section>

        <div className="wrapper">
          {products.map((element, index) => menu === element.categoria ? <Itemstore data={element} key={element.id} add={addtocart} /> : null)}
        </div>
      </section>
    </div>
  )
}

export default Menu