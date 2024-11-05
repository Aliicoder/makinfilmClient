import { Outlet } from "react-router-dom"
import { lazy } from "react"
const Header = lazy(()=>import("@/components/shared/Header"))
const Actions = lazy(()=>import("@/components/shared/Actions"))

function MainLayout() { 
  return (
    <div className="relative bg-black">
      <div id="light" className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30  h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2"/>
      <Header />
      <Outlet />   
      <Actions />
      <div className="h-[18vh]" />
    </div> 
  )
}

export default MainLayout