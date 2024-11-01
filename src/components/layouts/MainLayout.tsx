import { Outlet } from "react-router-dom"
import { lazy } from "react"
const Header = lazy(()=>import("@/components/shared/Header"))
const Actions = lazy(()=>import("@/components/shared/Actions"))

function MainLayout() { 
  return (
    <div
       className="relative bg-black">
      <Header />
      <Outlet />   
      <Actions />
      <div className="h-[18vh]" />
    </div> 
  )
}

export default MainLayout