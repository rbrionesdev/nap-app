import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to='/'>Home</Link>
      <Link to='/things'>Things</Link>
    </div>
  )
}

export default NavBar