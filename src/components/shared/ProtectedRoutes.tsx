import { selectCurrentUser } from '@/store/Reducers/authReducer'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoutes() {
  const user = useSelector(selectCurrentUser) ; console.log("<ProtectedRoutes> user >>", user)
  toast.success(`protected route ${user.name}`)
  if(user.accessToken != "") 
    return <Outlet/>
  else
    return <Navigate to={"/"}/>
}

export default ProtectedRoutes