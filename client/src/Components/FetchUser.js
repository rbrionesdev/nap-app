import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../providers/AuthProvider"


const FetchUser = () => {
  const { user, setUser } = useContext(AuthContext)

  useEffect(()=>{
    checkUser()
  },[])

  const checkUser= async () => {

    if (user || !localStorage.getItem("access-token")) {
      setChecked(true);
      return;
    }
    try{
      let res = await axios.get('/api/auth/validate_token')
      setUser(res.data.data)
    }catch(err){

    }
  }
}