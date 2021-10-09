import React from 'react'
import { Button } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => props.history.push("/nap/new")}>Schedule Nap</Button>
    </div>
  )
}

export default Home;