import axios from "axios"
import { useEffect, useState } from "react"


const useAxiosOnMount = (url) => {
const [data, setData] = useState(null)

useEffect(()=> {
  getData()
},[])

const getData = async () => {
  try{
    let res = await axios.get(url)
    setData(res.data)
  }catch(err){
    console.log(err)
  }
}

return {data}

}

export default useAxiosOnMount