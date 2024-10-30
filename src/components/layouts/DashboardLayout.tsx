import { Outlet } from "react-router-dom"
import DashboardHeader from "../shared/DashBoardHeader"
import ConditionalLoader from "../conditionals/ConditionalLoader"
import SideBar from "../shared/SideBar"
import usePersistLogin from "@/hooks/usePersistLogin"
function DashboardLayout() { 
  const {isLoading} = usePersistLogin()
  return (
   <>
    {
      isLoading ?
      <ConditionalLoader condition={isLoading} /> 
      :
      <div className="container mx-auto flex h-lvh bg-black text-white overflow-hidden ">
        <div className="grow overflow-x-scroll">
          <DashboardHeader />
          <Outlet />
        </div>
        <SideBar />
      </div>
    }
   </>
   
  )
}

export default DashboardLayout