import React from 'react'
import { Card } from 'semantic-ui-react';

const NapCard = ({duration, description, title, date}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{duration} hours</Card.Meta>
      </Card.Content>
      <Card.Content description={description}/>
      <Card.Content extra>
        <Card.Meta>
          {date}
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default NapCard;