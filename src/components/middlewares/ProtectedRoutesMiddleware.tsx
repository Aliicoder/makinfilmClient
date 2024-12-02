import useInitialRendersCounter from '@/hooks/useRendersCount'
import { selectCurrentUser } from '@/store/Reducers/authReducer'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from "react-router-dom"

function ProtectedRoutesMiddleware() {
  useInitialRendersCounter("ProtectedRoutesMiddleware")
  const user = useSelector(selectCurrentUser) 
  const { pathname } = useLocation()
  if(user.accessToken)
    return <Outlet/>
  else{
    return <Navigate to={"/login"} state={{from:pathname}}/>
  }
  
}

export default ProtectedRoutesMiddleware