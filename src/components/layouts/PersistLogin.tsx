import useSegment from "@/hooks/useSegment"
import { useRefreshMutation } from "@/store/Reducers/authApiSlice"
import { selectCurrentUser, setCredentials } from "@/store/Reducers/authReducer"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
function PersistLogin() {
  const user = useSelector(selectCurrentUser); //console.log("persist login user >>",user)
  const navigate = useNavigate()
  const segment = useSegment(1)
  const dispatch = useDispatch()
  const [refresh] = useRefreshMutation();
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    const persistLogin = async () =>{
      try {
        if(!user.accessToken){
          const response = await refresh({}).unwrap(); //console.log("Refreshing >>", response)
          dispatch(setCredentials(response.user))
          toast.success(response.message);
          navigate("/dashboard/videos")
        }else{ 
          if(segment == "login")
            navigate("/dashboard/videos")
          console.log("persist state")
        }
      }catch(error){ console.log(" refreshing error >>",error) 
        toast.error("please login first")
        navigate("/login")
      }finally{
        setIsLoading(false)
      }
    }
    persistLogin()
  },[])
  return (
    <>
     {
      isLoading ?
      null
      :
      <>
        <div id="light" className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30  h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <Outlet />
        <Toaster 
            toastOptions={{
              position:"top-right",
              className:"noOutline"
            }}
          />
      </>
     }
    </>   
  )
}

export default PersistLogin