import { useRefreshMutation } from "@/store/Reducers/authApiSlice";
import { setCredentials } from "@/store/Reducers/authReducer";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const usePersistLogin = () =>{
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [refresh] = useRefreshMutation();
  const [isLoading,setIsLoading] = useState(true)
  const location = useLocation()
  const from = location?.state?.from?.pathname || "/" ; //console.log("redirected from >>",from)
  useEffect(()=>{
    const persistLogin = async () =>{
      try {
        const response = await refresh({}).unwrap(); //console.log("Refreshing >>", response)
        dispatch(setCredentials(response.user))
        toast.success(`refreshing ${response.user.accessToken}`)
      }catch(error){ console.log(" refreshing error >>",error) 
        toast.error("please login first")
        navigate("/login")
      }finally{
        setIsLoading(false)
      }
    }
    persistLogin()
  },[])
  return { isLoading }
}
export default usePersistLogin