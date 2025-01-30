import { Outlet } from "react-router-dom"

import useInitialRendersCounter from "@/hooks/useRendersCount"
import DashboardHeader from "@/components/shared/DashBoardHeader"
import DashboardConditionalMenu from "@/components/shared/DashboardConditionalMenu"
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