import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';
import MyCard from '../Components/MyCard';


const Search = () => {
  const { user } = useContext(AuthContext)
  const [cards, setCards] = useState([])
  const [ownedCards, setOwnedCards] = useState([])

  useEffect(()=>{
    getCards()
  },[])
  
  const getCards = async()=>{
    try{
      let res = await axios.get('/api/punchcards/all')
      setCards(res.data)
      console.log('all cards',res.data)
    }catch(err){
      console.log(err)
    }
  }
  
  const renderCards = () => {
    return cards.map((c) => <MyCard {...c}/>)
  }

  return (
    <div>
      <h1>Search</h1>
      {renderCards()}
    </div>
  )
}

export default Search