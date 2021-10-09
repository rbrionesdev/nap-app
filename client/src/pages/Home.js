import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import { Redirect } from 'react-router';
import NapFeed from '../Components/NapFeed';
import { AuthContext } from '../providers/AuthProvider';

const Home = (props) => {
  const {user} =useContext(AuthContext)
  if(user){
      return (
        <div>
        <h1>Home</h1>
        <Button onClick={() => props.history.push("/nap/new")}>Schedule Nap</Button>
        <NapFeed />
        <br />
        <Button onClick={() => props.history.push("/naps")}>View All Scheduled Naps</Button>
      </div>
    )
  } 
  return (
    <Redirect to='/landing_page' />
  )
}

export default Home;