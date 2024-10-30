import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"
function MainLayout() { 
  const [t,{language}] = useTranslation()
  useEffect(()=>{
    toast(`${t("welcomeBack")}`)
  },[language])
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