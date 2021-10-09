import React, { useEffect, useState } from 'react'
import axios from'axios'
import OurPagination from '../Components/OurPagination'
import LeaderboardCard from '../Components/LeaderboardCard'
import { List, Segment } from 'semantic-ui-react'

const Leaderboard = () => {
  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(()=>{
    getUsers(page)
  },[])

  const getUsers = async (p) => {
    setPage(p)
    try{
      let res = await axios.get(`/api/leaderboard?page=${p}`)
      setUsers(res.data.users)
      setTotalPages(res.data.total_pages)
    }catch(err){
      console.log(err)
    }
  }

  const renderUsers = () => {
    return users.map(u => {
      return (
        <LeaderboardCard key={u.id} user={u} />
      )
    })
  }

  return(
    <div>
      <h1>Our top nappers</h1>
      <Segment>
      <List>
        {renderUsers()}
      </List>
      </Segment>
      {/* <OurPagination page={page} setPage={setPage} totalPages={totalPages} method={getUsers} /> */}
    </div>
  )
}

export default Leaderboard;