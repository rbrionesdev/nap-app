import React from 'react'
import { Button } from "react-bootstrap";
import NapFeed from '../Components/NapFeed';

const Home = (props) => {
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

export default Home;