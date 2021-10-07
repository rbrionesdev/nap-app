import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Card, Button} from 'react-bootstrap'


const Dashboard = () => {
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


  const deletePunchcard = async (punch_id) => {
    try{
      await axios.delete(`/api/users/${user.id}/user_punchcard/${punch_id}`)
      getPunchcards()
    }catch(err){
      console.log(err)
    }
  }

  const renderPunchcards = () => {
    return punchcards.map((p)=>{
      return (
        <div style={{padding:'10px'}}>
          <Card>
            <Card.Body>
              <Card.Title>
          <h1>{p.restaurant_name}</h1>
          <p>{p.needed_points} Points Required</p>
          </Card.Title>
          <p>{p.punch_descrip}</p>
          <p>You have {p.current_points} points</p>
          <p>{p.punchcard_id}</p>
          <Button onClick={()=>deletePunchcard(p.up_id)}>Remove</Button>
          </Card.Body>
          </Card>
        </div>
      )
    })
  }

  // <Card>
  //     <Card.Body>
  //       <Card.Title>
  //     <h1>{props.restaurant_name}</h1><br/>
  //     </Card.Title>
  //     <Card.Text>
  //       <p>{props.description}</p>
  //       <p>id: {props.punch_id}</p>
  //       </Card.Text>
  //       {ownedId.includes(props.punch_id) ? <Card.Footer>You own this card</Card.Footer> : <Button onClick={()=>addToWallet(props.punch_id)}>Add To Wallet</Button>}
  //     </Card.Body>
  //   </Card>

  return (
    <div>
      <h2>Cards In Your Wallet:</h2>
      {punchcards && renderPunchcards()}
    </div>
  )
}

export default Dashboard