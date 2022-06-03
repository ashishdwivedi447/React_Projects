import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/" >HOME</Link>{"  "}
      <Link to="/products" >PRODUCTS</Link>
    </div>
  )
}

export default Navbar
