import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'

const LeaderboardCard = ({user}) => {
  const [status, setStatus] = useState('blue')

  const defineStatus = () => {
    if(user.average_nap_time < 3){
      setStatus('red')
    } else if(user.average_nap_time <6.5){
      setStatus('orange')
    }else if(user.average_nap_time <8){
      setStatus('yellow')
    }else {
      setStatus('green')
    }
  }

  useEffect(()=>{
    defineStatus()
  },[])

  return (
    <Card fluid color={status}>
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta floated='right'>{user.average_nap_time} hours per week</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default LeaderboardCard;