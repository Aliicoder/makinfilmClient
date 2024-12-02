import { usePersistLoginMutation } from "@/store/Reducers/authApiSlice"
import { setCredentials } from "@/store/Reducers/authReducer"
import { Outlet, useNavigate } from "react-router-dom"
import { memo, useEffect , useState,  } from 'react';
import { useDispatch } from "react-redux";
import useInitialRendersCounter from "@/hooks/useRendersCount";

const PersistLoginMiddleware = memo(function PersistLoginMiddleware() {
  useInitialRendersCounter("persistLoginMiddleware")
  const [persistLoginMutation] = usePersistLoginMutation()
  const [finishedLoading,setFinishedLoading] = useState<boolean>(false)
  const dispatch = useDispatch()  
  const navigate = useNavigate()
  useEffect(()=>{
    const persistLogin = async () =>{
      try {
        const response = await persistLoginMutation({}).unwrap();
        dispatch(setCredentials(response?.user))
        navigate("/dashboard/videos")
      } catch (error) {

      } finally {
        setFinishedLoading(true)
      }
    }
    persistLogin()
  },[])
  return (
    <>
     {
      finishedLoading ?
      <>
        <div id="light" 
          className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30  h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2">
          
          </div>
        <Outlet />
      </>
      :
      null
     }
    </>   
  )
}
)
export default PersistLoginMiddleware