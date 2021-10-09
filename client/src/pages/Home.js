import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import { Redirect } from 'react-router';
import NapFeed from '../Components/NapFeed';
import { AuthContext } from '../providers/AuthProvider';
import '../StyleSheets/Home.css'

const Home = (props) => {
  const {user} =useContext(AuthContext)
  if(user){
    return (
      <div className="page-wrapper">
        <div className="button-wrapper">
          <Button variant='outline-secondary' onClick={() => props.history.push("/nap/new")}>Schedule Nap</Button>
          <Button variant='outline-secondary' onClick={() => props.history.push("/naps")}>View All Scheduled Naps</Button>
        </div>
        <div className='feed-wrapper'>
          <h2>Who's napping</h2>
          <NapFeed />
        </div>
      </div>
    )
  } 
  return (
    <Redirect to='/landing_page' />
  )
}

export default Home;