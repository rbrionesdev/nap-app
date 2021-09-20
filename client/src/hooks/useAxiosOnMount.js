import axios from "axios"
import { useEffect, useState } from "react"


const useAxiosOnMount = (url) => {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=> {
  getData()
},[])

const getData = async () => {
  try{
    let res = await axios.get(url)
    setData(res.data)
  }catch(err){
    setError(err)
  }
  finally {
    setLoading(false);
  }
}

return {data, error, loading}

}

export default useAxiosOnMount