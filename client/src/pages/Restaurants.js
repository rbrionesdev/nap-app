import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react';
import RestaurantForm from '../Components/RestaurantForm';
import Restaurant from '../Components/Restaurant';
import { AuthContext } from '../providers/AuthProvider'

function Restaurants(props) {
  const { user } = useContext(AuthContext)
  const [stores, setStores] = useState([])
  // const [showForm, setShowForm] = useState([])

  useEffect(() => {
    getStores()
  }, [])

  const getStores = async () => {
    try {
      let res = await axios.get(`/api/users/${user.id}/restaurants/`)
      setStores(res.data)
    } catch (err) {
      console.log(err)
    };
  };

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

const deleteStore = async (id) => {
    try {
      await axios.delete(`/api/users/${user.id}/restaurants/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Card>
        <Card.Content>
        <RestaurantForm />
        </Card.Content>
      </Card>
      <h1>One Creator's Restaurants:</h1>
      {renderStores()}
    </div>
  );
}

export default Restaurants;