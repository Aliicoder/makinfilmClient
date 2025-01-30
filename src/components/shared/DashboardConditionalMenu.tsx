import useSegment from "@/hooks/useSegment"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import IconButton from "../buttons/IconButton";
import { useDispatch } from "react-redux";
import { logout } from "@/store/Reducers/authReducer";
import { useLogoutMutation } from "@/store/apiSlices/authApiSlice";

function DashboardConditionalMenu() {
  const [t] = useTranslation()
  const secondSegment = useSegment(2) ; //console.log(secondSegment)
  const [logOutMutation] = useLogoutMutation()
  const dispatch = useDispatch()
  const handleLogOut = async () =>{
    try{
      await logOutMutation({}).unwrap(); //console.log("response >>",response)
      dispatch(logout())
    }catch(error){}
  }
  return (
    <div className="hidden md:flex flex-col justify-between p-[3%]   h-full bg-[#d4d4d420] text-[#ffffff42]">
      <div className=" flex flex-col items-center rtl:items-center  ">
      <Link to={"videos"} replace className="flex justify-between text-nowrap items-center 
        rtl:flex-row-reverse rtl:justify-start rtl:text-end ">
          <h1 className={` ${secondSegment === "videos" ? "text-white font-semibold " : ""}
            c4 transition-all py-[6%] `}>{t("navigators.videos")}</h1>
        </Link>
        <Link to={"photos"} replace className="flex justify-between text-nowrap items-center rtl:flex-row-reverse ">
          <h1 className={` ${secondSegment === "photos" ? "text-white font-semibold" : ""}
            c4 transition-all py-[6%]  `}>{
            t("navigators.photos")}
          </h1>
        </Link>
      </div>

      <div>
      <IconButton onClick={handleLogOut}  className="border text-nowrap border-white bg-transparent px-[4%] py-[4%] " text={t("logOut")} direction={"right"}>
      </IconButton>
      </div>
    </div>
  )
}

export default DashboardConditionalMenu