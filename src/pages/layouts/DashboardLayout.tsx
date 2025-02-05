import { Outlet } from "react-router-dom"

import useInitialRendersCounter from "@/hooks/useRendersCount"
import FlexRowContainer from "@/components/styled/FlexRowContainer"
import Frame from "@/components/styled/Frame"
import Header from "@/components/shared/dashboard/Header"
import Sidebar from "@/components/shared/dashboard/Sidebar"
function DashboardLayout() { 
  useInitialRendersCounter("dashboardLayout")
  return (
    <FlexRowContainer className="h-lvh rtl:flex-row-reverse text-white">
      <Frame className=" grow overflow-y-scroll hide-scrollbar
        md:p-10">
        <Header/>
        <Outlet />
      </Frame>
      <Sidebar className="hidden md:flex flex-col justify-between p-[3%]   h-full bg-[#d4d4d420] text-[#ffffff42]"/>
    </FlexRowContainer>
  
  )
}

export default DashboardLayout