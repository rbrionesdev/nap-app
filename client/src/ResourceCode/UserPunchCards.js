import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';


const UserPunchCards = () => {
  const { user } = useContext(AuthContext)
  const [punchcards, setPunchcards] = useState([])
  
  useEffect(()=>{
    getPunchcards()
  },[])

  const getPunchcards = async()=> {
    try{
      let res = await axios.get(`/api/user/${user.id}/punchcard_by_user`)
      console.log(res.data)
      setPunchcards(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderPunchcards = () => {
    return punchcards.map((p)=>{
      return (
        <div>
          <Card>
          <h1>{p.restaurant_name}</h1>
          <p>{p.needed_points} Points Required</p>
          <p>{p.punch_descrip}</p>
          <p>You have {p.current_points} points</p>
          </Card>
        </div>
      )
    })
  }
  return (
    <div>
      <h2>Your Punch Cards:</h2>
      {punchcards && renderPunchcards()}
    </div>
  )
}

export default UserPunchCards