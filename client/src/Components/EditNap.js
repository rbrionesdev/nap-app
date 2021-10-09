import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, StepDescription } from "semantic-ui-react";

const EditNap = (props) => {

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(""); 
  const [nap, setNap] = useState("");


  useEffect(() => {
    getNap();
  }, []);

  const getNap = async () => {
    try {
      let res = await axios.get(`/api/naps/${props.match.params.id}`);
      setNap(res.data);
      setTitle(res.data.title)
      setDuration(res.data.duration)
      setDescription(res.data.description)
      setDate(res.data.date)
    } catch (error) {
      alert("error retrieving naps")
      console.log(error);
    };
  };
 

  const handleSubmit = async () => {
    try {
    await axios.put(`/api/naps/${props.match.params.id}`, { title, duration, description, date });
    props.history.push("/naps");
    } catch (error) {
      alert("error");
      console.log("error");
    };
  };

  return (
    <div>
      <h2>Update Nap</h2>
      <Form onSubmit={handleSubmit}>
        <p>Title:</p>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Duration (hrs):</p>
        <Input value={duration} onChange={(e) => setDuration(e.target.value)} />
        <p>Description:</p>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        <p>Date and Time:</p>
        <Input value={date} onChange={(e) => setDate(e.target.value)} /><br />
        <Button type="submit">Update</Button>
      </Form>
      <Button onClick={() => props.history.goBack()}>go back</Button>
    </div>
  );
};

export default EditNap;