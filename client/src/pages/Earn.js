import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
// import './'

const Earn = ({punchcard_id, restaurant_id, restaurant_name, current_points, total_points, reward_id }) => {
  const { user } = useContext(AuthContext)
  const [punchcardData, setPunchcardData] = useState([])

  // useEffect(()=> {
  //   getData()
  // },[])

  // const getData = async() => {
  //   try {
  //     let res = await axios.get(`/api/user/${user.id}/user_punchcard/${punch_id}`)
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // This is a landing page for a specific user's specific punchcard.
  // punchcard_by_user provides ALL the user's punchcards.  The wallet
  // page should map through all these punchcards and send them here,
  // to ONE punchcard. 
  // Where the punchcards are rendered, that place needs to send me
  // the data from punchcard_by_user: 
  // restaurant_name
  // user_punchcard_id ?
  // needed_points
  // total_points
  // rewards_id

  return (
    <div className="jumbotron text-center">
      <h1>restaurant_name</h1>
      <h5>$1 = 1 Point</h5>
      !inwallet ?<button> Add Card! -POST to user's punchards-</button>: Already in wallet
      <div className="circle">
      <h1>inWallet? Current_Points : 0</h1>
      </div>
      <hr />
      <Link to="/showqr"><button >Earn Points QR</button></Link>
      <hr />
      <h5>Map through rewards here. Logic makes ones whose points are less than or equal to current_points GREEN.</h5>
    </div>
  )
}

export default Earn

