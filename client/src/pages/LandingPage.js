import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react'
import '../StyleSheets/LandingPage.css'

const LandingPage = () => {
  const history = useHistory()
  return(
    <div>
      <div className='title-wrapper'>
        <p className='the'>The</p>
        <p className='nap'>Nap</p>
        <p className='app'>App</p>
      </div>

      <div className='about'>
        <Button onClick={(e)=>history.push('/about')}>About the Creators</Button>
      </div>
    </div>
  )
}

export default LandingPage;