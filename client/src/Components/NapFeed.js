import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Feed } from 'semantic-ui-react'
import NapCard from './NapCard'

const NapFeed = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    getData()
  }, [])

  const getData = async () => {
    try{
      let res = await axios.get('/api/feed')
      setData(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const renderFeedItems = () => {
    return data.map(d=>{
      return(
        <Feed.Event key={d.id}>
          <Feed.Content>
            <Feed.Summary>
              {d.name} is going to take a Nap
              <Feed.Date>{d.nap_scheduled}</Feed.Date>
            </Feed.Summary>
            <Feed.Extra>
              <NapCard duration={d.duration} description={d.description} date={d.date} title={d.title} />
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      )
    })
  }
  return (
    <Feed>
      {renderFeedItems()}
    </Feed>
  )
}

export default NapFeed;