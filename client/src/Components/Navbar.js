import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'

const NavBar = () => {
  const history = useHistory()
  const { user, handleLogout } = useContext(AuthContext)
  const location = useLocation()

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Link to='/edit_user'>
            <Menu.Item active={location.pathname === '/edit_user'} >
              Edit User
            </Menu.Item>
          </Link>
          <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
        </>
      );
    }
    return (
      <>
        <Link to="/login">
          <Menu.Item active={location.pathname === "/login"}>Login</Menu.Item>
        </Link>
        <Link to="/register">
          <Menu.Item active={location.pathname === "/register"}>
            Register
          </Menu.Item>
        </Link>
      </>
    );
  };

  return (
    <Menu>
      <Link to='/'><Menu.Item active={location.pathname === "/"}>Home</Menu.Item></Link>
      <Link to='/things'><Menu.Item active={location.pathname === "/things"}>Things</Menu.Item></Link>
      <Link to='/qrdemo'><Menu.Item active={location.pathname === "/qrdemo"}>qr demo</Menu.Item></Link>
      <Link to='/user/punchcards'><Menu.Item active={location.pathname === "/user/punchcards"}>user punchcards</Menu.Item></Link>
      <Menu.Menu position="right">
        {rightNavItems()}
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar