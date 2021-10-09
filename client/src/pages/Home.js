import React from 'react'
import { Button } from "semantic-ui-react";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => props.history.push("/nap/new")}>Schedule Nap</Button>
      <br />
      <Button onClick={() => props.history.push("/naps")}>View All Scheduled Naps</Button>
    </div>
  )
}

export default Home;