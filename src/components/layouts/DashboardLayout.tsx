import { Outlet } from "react-router-dom"
import DashboardHeader from "../shared/DashBoardHeader"
import SideBar from "../shared/SideBar"
function DashboardLayout() { 
  return (
    <div className="container mx-auto flex h-lvh bg-black text-white overflow-hidden rtl:flex-row-reverse ">
      <div className="grow relative overflow-y-scroll ">
        <DashboardHeader />
        <Outlet />
      </div>
      <SideBar />
    </div>
  
  )
}

export default DashboardLayout