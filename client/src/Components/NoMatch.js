import React from 'react';
import { Image, } from 'semantic-ui-react';
import { useHistory } from 'react-router';

const NoMatch = () => {
  const history = useHistory()

  return(
    <>
      <div onClick={()=> history.push('/')}>
      <Image src='https://miro.medium.com/max/1400/1*ASPrAbd2qtFVSVuru7Y7Rw.png'/>
      </div>
    </>
  )
}

export default NoMatch;