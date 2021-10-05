import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react';
import RestaurantForm from '../Components/RestaurantForm';

function Restaurants(props) {
  const [stores, setStores] = useState([])
  const [showForm, setShowForm] = useState([])

  useEffect(() => {
    getStores()
  }, [])

  const getStores = async () => {
    try {
      let res = await axios.get("/api/restaurants")
      setStores(res.data)
    } catch (err) {
      console.log(err)
    };
  };

  const deleteStore = async (id) => {
    try {
      await axios.delete(`/api/restaurants/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const renderStores = () => {
    return stores.map((s) => {
    return (
      <div>
        <h2>{s.name}</h2>
        <p>{s.city}</p>
        <Button onClick={() => deleteStore(s.id)}>delete</Button>
      </div>
    )
  })}

  return (
    <div>
      <Card>
      <RestaurantForm />
      </Card>
      <h1>Here are some Restaurants</h1>
      {renderStores()}
    </div>
  );
}

export default Restaurants;