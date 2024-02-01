'use client'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Store, cartReducer, initialState } from '../components/cartReducers'
import Itemstore from '../components/Itemstore'
import TableArticulos from '../components/TableArticulos'
import Link from 'next/link'



const Menu = () => {
  const { state, dispatch } = useContext(Store)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products, cart } = state
  const categoria = new Set(products.map(element => element.categoria))
  console.log([...categoria])
  console.log(cart)
  const addtocart = (data) => {
    dispatch({ type: "add_to_cart", payload: data })
  }

  const delete_one = (data) => dispatch({ type: "delete_one", payload: data })



  return (
    <>
      <>
        {cart.length ?
          <Button variant="primary" onClick={handleShow} className="cart">
            <svg viewBox="0 0 24 24" className='w-12 h-12' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <div>{cart.length}
            </div>
          </Button>
          : <></>}

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
              {cart.map((element, index) => <TableArticulos key={index} data={element} eliminar={delete_one} />)}

            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Link href="/checkout" className='btn btn-success' >Pagar</Link>
          </Modal.Footer>
        </Modal>
      </>
      <div className=' space-y-24'>
        <main className='category'>
          <div style={{ display: "inline-block" }}>

          </div>
        </main>

        <div className='text-center'>
          <a href="/public/menu.pdf" className="btn btn-danger" download ><span className='flex font-bold text-4xl lg:text-7xl items-center'>Menú <svg className='w-16 h-16 lg:w-24 lg:h-24' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514 c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716 c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z"></path> <path class="st0" d="M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599 c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612 C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23 c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z"></path> <path class="st0" d="M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868 c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856 C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23 c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46 c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z"></path> <path class="st0" d="M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599 c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56 c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733 c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z"></path> </g> </g></svg></span></a>
        </div>

        <section className='space-y-24'>

          {[...categoria].map((element, index) => {
            return (<div className='' key={index}>
              <h1 key={index} className='capitalize lg:text-7xl text-4xl' >{element}</h1>
              <div className="w-screen p-4 md:pl-2 overflow-x-scroll p">
                <div className='flex gap-4 w-max '>
                  {products.map((item, index) => {
                    if (item.categoria === element) {
                      if (typeof item.valor === "object") {
                        return item.valor.map((element, index) => <Itemstore key={index} data={{ ...item, valor: item.valor[index].value, opcionId: index }} add={addtocart} />)
                      } else {
                        return <Itemstore key={index} data={{ ...item, opcionId: 0 }} add={addtocart} />
                      }
                    } else {
                      return null
                    }
                  })}
                </div>
              </div>
            </div>
            )
          })}
        </section>
      </div>
    </>
  )
}


export default Menu