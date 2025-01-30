import { Outlet } from "react-router-dom"
import ContactUs from "@/components/shared/ContactUs"
import Frame from "@/components/styled/Frame"
import Fixed from "@/components/styled/Fixed"
import Header from "@/components/shared/PublicHeader"
import Menu from "@/components/shared/Menu"


function MainLayout() { 
  return (
    <Frame 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="relative scroll-smooth">
      <Fixed id="light" className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30 
        h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2"/>
      <Menu />
      <Header />
      <Outlet />   
      <ContactUs />
    </Frame> 
  )
}

export default MainLayout