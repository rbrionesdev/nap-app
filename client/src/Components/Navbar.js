import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Image, Menu, Sticky } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'
import '../StyleSheets/App.css'
import Moon from '../imgs/moon.png'

const NavBar = () => {
  const history = useHistory()
  const { user, handleLogout, handleDelete } = useContext(AuthContext)
  const location = useLocation()

  const handleClick = (e, target) => {
    history.push(`${target}`)
  }

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Dropdown item simple text={user.name}>
            <Dropdown.Menu>
              <Menu.Item onClick={() => location.pathname === '/edit_user'} >
                <Link style={{ textDecoration: "none", color: "black" }} to='/edit_user'>
                  <Icon name='edit' />
                  Edit Profile
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => handleDelete(history)}> <Icon name='trash' />Delete Profile</Menu.Item>
              <Dropdown.Divider />
              <Menu.Item onClick={() => handleLogout(history)}> <Icon name='log out' />Logout</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    }
    return (
      <>
        <Menu.Item as='a'>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </Menu.Item>
      </>
    );
  };

  return (
    <Sticky>
      <Menu tabular stackable inverted color='blue'>
        <Menu.Item as='a' onClick={(e)=>handleClick(e, '/')} header>
          <Image  inverted size='mini' src={Moon} style={{ marginRight: '1.5em' }} />
          Nap-App
        </Menu.Item>
        <Menu.Item as='a' onClick={(e)=>handleClick(e, '/')}>
            Home
        </Menu.Item>
        <Menu.Item as='a' onClick={(e)=>handleClick(e, '/leaderboard')}>
            Leaderboard
        </Menu.Item>
        <Menu.Item as='a' onClick={(e)=>handleClick(e, '/calendarweekly')}>
            Calendar
        </Menu.Item>

        <Menu.Menu position="right">
          {rightNavItems()}
        </Menu.Menu>
      </Menu>
    </Sticky>
  )
}

export default NavBar