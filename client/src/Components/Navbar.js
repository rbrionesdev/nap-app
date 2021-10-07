import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'

const NavBar = () => {
  const history = useHistory()
  const { user, handleLogout, handleDelete } = useContext(AuthContext)
  const location = useLocation()

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Dropdown item simple text={user.name}>
            <Dropdown.Menu>
              <Link to='/edit_user'>
                <Menu.Item active={location.pathname === '/edit_user'} >
                  Edit Account
                </Menu.Item>
              </Link>
              <Menu.Item onClick={() => handleDelete(history)}>Delete Account</Menu.Item>
              <Menu.Item onClick={() => handleLogout(history)}>Logout</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    }
    return (
      <>
        <Link to="/login">
          <Menu.Item active={location.pathname === "/login"}>Login</Menu.Item>
        </Link>
        {/* <Link to="/register">
          <Menu.Item active={location.pathname === "/register"}>
            Register
          </Menu.Item>
        </Link> */}
      </>
    );
  };

  return (
    <Menu>
      <Link to='/'><Menu.Item active={location.pathname === "/"}>Home</Menu.Item></Link>
      <Link to='/userpunchcards'><Menu.Item active={location.pathname === "/userpunchcards"}>Wallet</Menu.Item></Link>
      <Link to='/search'><Menu.Item active={location.pathname === "/search"}>Search</Menu.Item></Link>
      <Menu.Menu position="right">
        {rightNavItems()}
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar