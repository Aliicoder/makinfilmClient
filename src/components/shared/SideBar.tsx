import { useCallback } from "react"
import { BiSolidVideos } from "react-icons/bi"
import { MdPhotoLibrary } from "react-icons/md"
import { RiDashboard3Fill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

function SideBar() {
  const redirect = useNavigate()
  const handleGoTo = useCallback((link:string)=>{
    redirect(link)
  },[])
  return (
    <div className="hidden md:flex h-full  p-[5%] ">
      <div className="bg-[#d4d4d420] p-[20%] rounded-[16px]">
        <ul className="flex flex-col items-end">
          <li className=" my-[10%]">
            <div onClick={()=>handleGoTo("/dashboard")} className="flex justify-between items-center ">
              <h1 className="c4 pr-[6%]">Dashboard</h1>
              <RiDashboard3Fill className="c5 shrink-0" />
            </div>
          </li>
          <li className="my-[10%]">
          <div onClick={()=>handleGoTo("/dashboard/videos")} className="flex justify-between items-center ">
              <h1 className="c4 font-semibold pr-[6%]">Videos</h1>
              <BiSolidVideos className="c5 shrink-0" />
            </div>
          </li>
          <li className="my-[10%]">
            <div onClick={()=>handleGoTo("/dashboard/photos")} className="flex justify-between items-center ">
              <h1 className="c4 pr-[6%]">Photos</h1>
              <MdPhotoLibrary className="c5 shrink-0" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar