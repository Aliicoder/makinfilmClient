import { Outlet } from "react-router-dom"
import DashboardHeader from "../shared/DashBoardHeader"
import DashboardConditionalMenu from "../shared/DashboardConditionalMenu"
import useInitialRendersCounter from "@/hooks/useRendersCount"
function DashboardLayout() { 
  useInitialRendersCounter("dashboardLayout")
  return (
    <div className="container mx-auto flex h-lvh bg-black text-white overflow-hidden rtl:flex-row-reverse ">
      <div className="grow relative overflow-y-scroll scroll-bar">
        <DashboardHeader />
        <Outlet />
      </div>
      <DashboardConditionalMenu />
    </div>
  
  )
}

export default DashboardLayout