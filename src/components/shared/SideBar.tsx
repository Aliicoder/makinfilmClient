import useSegment from "@/hooks/useSegment"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function SideBar() {
  const [t] = useTranslation()
  const secondSegment = useSegment(2) ;console.log(secondSegment)
  return (
    <div className="hidden md:flex p-[3%]   h-full bg-[#d4d4d420] text-[#ffffff42]">
      <div className=" flex flex-col items-center rtl:items-center  ">
      <Link to={"/dashboard/videos"} className="flex justify-between text-nowrap items-center 
        rtl:flex-row-reverse rtl:justify-start rtl:text-end ">
          <h1 className={` ${secondSegment === "videos" ? "text-white font-semibold " : ""}
            c4 transition-all py-[6%] `}>{t("navigators.videos")}</h1>
        </Link>
        <Link to={"/dashboard/photos"} className="flex justify-between text-nowrap items-center rtl:flex-row-reverse ">
          <h1 className={` ${secondSegment === "photos" ? "text-white font-semibold" : ""}
            c4 transition-all py-[6%]  `}>{
            t("navigators.photos")}
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default SideBar