import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item><Link to='/'>Home</Link></Menu.Item>
      <Menu.Item><Link to='/things'>Things</Link></Menu.Item>
    </Menu>
  )
}

export default NavBar