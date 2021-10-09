import React from 'react'
import { Card } from 'semantic-ui-react'

const LeaderboardCard = ({user}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta floated='right'>{user.average_nap_time} hours per week</Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default LeaderboardCard;