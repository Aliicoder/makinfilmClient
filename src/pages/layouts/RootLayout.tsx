import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"
import { useEffect } from 'react';

function RootLayout() {
  const [,{language}] = useTranslation()
  useEffect(() =>{
    document.documentElement.setAttribute("dir",language == "en" ? "ltr" : "rtl")
  },[language])
  return (
    <>
      <Outlet />
    </>
  )
}

export default RootLayout