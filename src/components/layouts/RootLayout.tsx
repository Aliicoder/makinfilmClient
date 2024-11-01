import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"
function MainLayout() { 
  return (
    <>
      <div id="light" className=" fixed top-0 z-50 pointer-events-none left-1/2 opacity-30  h-[200vh] w-[200vh]  rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <Outlet />
      <Toaster 
          toastOptions={{
            position:"top-right",
            className:"noOutline"
          }}
        />
    </>
   
  )
}

export default MainLayout