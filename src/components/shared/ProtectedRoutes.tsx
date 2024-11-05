import { selectCurrentUser } from '@/store/Reducers/authReducer'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
  const user = useSelector(selectCurrentUser) ; //console.log("<ProtectedRoutes> user >>", user)
  if(user.accessToken != "") 
    return <Outlet/>
  else
    return <Navigate to={"/"}/>
}

export default ProtectedRoutes