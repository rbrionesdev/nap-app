import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form } from "semantic-ui-react";


const CreateNap = () => {

  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [nap, setNap] = useState("")
  const history = useHistory("")



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post('/api/naps',  {title, duration, description, date})
      console.log(res.data)
      setNap(res.data)
      history.push("/")
    } catch (err) {
      console.log(err)
      alert("error scheduling nap")
    }
  }


  return (
    <div>
      <h1>Schedule a Nap</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <h5>Title:</h5>
        <Form.Input 
          value={title}
          onChange = {(e) => {
          setTitle(e.target.value)}}
        />
        <br />
        <h5>Duration:</h5>
        <Form.Input
          value={duration}
          onChange = {(e) => {
          setDuration(e.target.value)}}
        />
        <br />
        <h5>Description:</h5>
        <Form.Input 
          value={description}
          onChange = {(e) => {
          setDescription(e.target.value)}}
        />
        <br />
        <h5>Date and Time:</h5>
        <Form.Input 
          value={date}
          onChange = {(e) => {
          setDate(e.target.value)}}
        />
        <Button type="submit">Schedule Nap</Button>
      </Form>
    </div>
  )
}

export default CreateNap;