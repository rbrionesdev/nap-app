import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { Menu } from 'semantic-ui-react';
import CalendarWeekly from '../Components/CalendarWeekly';
import NapFeed from '../Components/NapFeed';
import { AuthContext } from '../providers/AuthProvider';
import '../StyleSheets/Home.css'

const Home = (props) => {
  const {user} =useContext(AuthContext)
  if(user){
    return (
      <div className="page-wrapper">
        <div className="button-wrapper">
          <Menu vertical>
            <Menu.Item onClick={() => props.history.push("/nap/new")}>
              Schedule Nap Time
            </Menu.Item>
            <Menu.Item onClick={() => props.history.push("/naps")}>
              View Scheduled Naps
            </Menu.Item>
          </Menu>
        </div>
        <div className='feed-wrapper'>
          <h2>Who's napping</h2>
          <NapFeed />
        </div>
        <div className="calendar-wrapper">
          <CalendarWeekly />
        </div>
      </div>
    )
  } 
  return (
    <Redirect to='/landing_page' />
  )
}

export default Home;