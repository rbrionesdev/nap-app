import React, { useEffect, useState } from 'react'
import { Feed } from 'semantic-ui-react'

const NapFeed = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    getData()
  }, [])

  const renderFeedItems = () => {

  }
  return (
    <Feed>

    </Feed>
  )
}

export default NapFeed;