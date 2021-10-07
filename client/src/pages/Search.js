import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';


const Search = () => {
  const { user } = useContext(AuthContext)
  const [cards, setCards] = useState([])

  useEffect(()=>{
    getCards()
  },[])

  const getCards = async()=>{
    try{
      let res = await axios.get('/api/punchcards/all')
      setCards(res.data)
      // console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  const addToWallet = async (punchcard_id) => {
    let user_id = user.id
    try{
      let res = await axios.post(`/api/users/${user.id}/user_punchcard`, {punchcard_id, user_id} )
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  const renderCards = () => {
    return cards.map((c) => {
      return (
        <Card>
          <h1>{c.restaurant_name}</h1>
          <p>{c.description}</p>
          <p>Points needed for reward: {c.total_points}</p>
          <p>punch card id: {c.punch_id}</p>
          <button onClick={()=> addToWallet(c.punch_id)}>Add To Wallet</button>
        </Card>
      )
    })
  }
  return (
    <div>
      <h1>Search</h1>
      {renderCards()}
    </div>
  )
}

export default Search