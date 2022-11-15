import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <Link to="/glamping">Glamping</Link>
      <Link to="/restaurante">restaurante</Link>
    </div>
  )
}

export default Services