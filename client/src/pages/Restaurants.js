import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react';
import RestaurantForm from '../Components/RestaurantForm';
import Restaurant from '../Components/Restaurant';

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
    return stores.map((store) => {
    return (
      <div key={store.id}>
        <Restaurant 
        store={store}
        deleteStore={deleteStore}
        />
      </div>
    )
  })}

  return (
    <div>
      <h1>Restaurants</h1>
      {renderStores()}
    </div>
  );
}

export default Restaurants;