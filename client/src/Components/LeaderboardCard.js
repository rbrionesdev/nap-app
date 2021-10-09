import React from 'react'
import { Card } from 'semantic-ui-react'

const LeaderboardCard = ({user}) => {
  return (
    <Card fluid header={`${user.name} ${user.average_nap_time}`} />
  )
}

export default LeaderboardCard;