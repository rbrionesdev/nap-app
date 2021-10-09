import React from 'react'
import { Button } from "react-bootstrap";
import NapFeed from '../Components/NapFeed';

const Home = (props) => {
  return (
    <div>
      <h1>Friend Nap Activity</h1>
      <Button onClick={() => props.history.push("/nap/new")}>Schedule Nap</Button>
      <Button onClick={() => props.history.push("/naps")}>View All Scheduled Naps</Button>
      <br />
      <NapFeed />
    </div>
  )
}

export default Home;