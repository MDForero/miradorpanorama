import React from 'react'
import { Table } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import TableArticulos from '../components/TableArticulos'

const Checkout = () => {
  let location = useLocation()
  const { cart } = location.state
  return (
    <div>
      {cart.length?<Table style={{ textAlign: "center" }}>
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
      </Table>: <h1>carrito vacío vuelva al menú</h1>}
    </div>
  )
}

export default Checkout