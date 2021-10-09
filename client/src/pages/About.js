import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import julieImg from '../imgs/julie_img.png'
import tomImg from '../imgs/tom_img.png'
import rafImg from '../imgs/raf_img.png'

const About = () => {
  return(
    <div>
      <h1>The Creators</h1>
      <Card.Group centered>
        <Card>
          <Image src={tomImg} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>Tom</Card.Header>
            <Card.Meta>Co-Creator</Card.Meta>
            <Card.Description>
              Tom used to live his life in theater, now lives on a computer
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src={julieImg} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>Julie</Card.Header>
            <Card.Meta>Co-Creator</Card.Meta>
            <Card.Description>
              Julie is a former chemist turned programmer
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src={rafImg} wrapped ui={false}/>
          <Card.Content>
            <Card.Header>Rafael</Card.Header>
            <Card.Meta>Co-Creator</Card.Meta>
            <Card.Description>
              Sushi loving, Vegas regular Rafael has begun his programming career in Utah
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
      <br />
      <h2><center>Resisting A Rest!</center></h2>
    </div>
  )
}

export default About;