import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider'

function RestaurantForm(props) {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e) => {
    try {
      await axios.post(`/api/users/${user.id}/restaurants/`, {
        name,
        city,
        zip,
        phone_number: phone,
        user_id: user.id
      })
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={(e) => setName(e.target.value)} 
          placeholder="name" />
        <label name="name">Name</label>
        <input 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="city" />
        <label name="city">City</label>
        <input 
          onChange={(e) => setZip(e.target.value)}
          placeholder="zip" />
        <label name="zip">Zip</label>
        <input 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="phone" />
        <label name="phone">Phone</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;