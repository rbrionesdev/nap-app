import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react'
import '../StyleSheets/LandingPage.css'
import moon2 from '../imgs/moon2.png'

const LandingPage = () => {
  const history = useHistory()
  return(
    <div className='photo'
      // backgroundImage: `url("https://www.pinclipart.com/picdir/big/416-4166926_sleep-logo-transparent-clipart.png")`
    >
      <div className='login'>
      <Button onClick={(e)=>history.push('/login')}>Login</Button>
      <Button onClick={(e)=>history.push('/register')}>Register</Button>
      </div>
      <div className='title-wrapper'>
        <p className='the'>THE</p>
        <p className='nap'>NAP</p>
        <p className='app'>APP</p>
      </div>

      <div className='about'>
        <Button onClick={(e)=>history.push('/about')}>About the Creators</Button>
      </div>
    </div>
  )
}

export default LandingPage;