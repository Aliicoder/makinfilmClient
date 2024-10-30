import LinkButton from "@/components/buttons/LinkButton"
import { useEffect } from "react"
import toast from "react-hot-toast"

function NotFoundPage() {
  useEffect(()=>{
    toast.error("Page not Found")
  },[])
  return (
    <div className="grid place-items-center h-lvh w-lvw text-white">
    <div>
        <h1 className="font-semibold c9 text-white">Page not found</h1>
        <h1 className="text-center c7 text-slate-700">404</h1>
        <LinkButton to={"/"} text="Go back" className="text-center font-semibold" direction={"left"}>
        </LinkButton>
    </div>
    </div>
  )
}

export default NotFoundPage