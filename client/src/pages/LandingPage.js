import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'semantic-ui-react'

const LandingPage = () => {
  const history = useHistory()
  return(
    <div>
      <h1>Landing Page</h1>
      <Button onClick={(e)=>history.push('/about')}>About the Creators</Button>
    </div>
  )
}

export default LandingPage;