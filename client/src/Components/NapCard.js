import React from 'react'
import { Card } from 'semantic-ui-react';

const NapCard = ({duration, description, title, date}) => {
  return (
    <Card>
      <Card.Content header={title}/>
      <Card.Content description={description}/>
      <Card.Content extra>
        {date}, {duration}
      </Card.Content>
    </Card>
  )
}

export default NapCard;