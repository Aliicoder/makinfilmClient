import { Outlet } from "react-router-dom"
import DashboardHeader from "../shared/DashBoardHeader"
import SideBar from "../shared/SideBar"
function DashboardLayout() { 
  return (
    <div className="container mx-auto flex h-lvh bg-black text-white  rtl:flex-row-reverse ">
      <div className="md:grow relative">
        <DashboardHeader />
        <Outlet />
      </div>
      <SideBar />
    </div>
  
  )
}

export default DashboardLayout