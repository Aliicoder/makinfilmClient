import { Outlet } from "react-router-dom"
import { lazy } from "react"
import ContactUs from "../shared/ContactUs"
const Header = lazy(()=>import("@/components/shared/PublicHeader"))
const Actions = lazy(()=>import("@/components/shared/Actions"))

function MainLayout() { 
  return (
    <div className="relative bg-black">
      <div id="light" className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30  h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2"/>
      <Header />
      <Outlet />   
      <Actions />
      <ContactUs />
      <div className="h-[18vh]" />
    </div> 
  )
}

export default MainLayout