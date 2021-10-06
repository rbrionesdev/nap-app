import { Spinner } from 'react-bootstrap'
import { Segment } from 'semantic-ui-react'

const MySpinner = () => {

  return(
    <>
    <Segment> 
    <Spinner as='div'animation='grow' />
    <Spinner animation="border" />
    <Spinner animation="border" size="sm" />
    <Spinner animation="border" />
    <Spinner animation="grow" size="sm" />
    <Spinner animation="grow" />
    </Segment>
    </>
  )
}


export default MySpinner
