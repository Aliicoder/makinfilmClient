import useSegment from "@/hooks/useSegment"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { logout } from "@/store/Reducers/authReducer";
import { useLogoutMutation } from "@/store/apiSlices/authApiSlice";
import CustomButton from "@/components/buttons/CustomButton";
import FlexCol from "@/components/styled/FlexCol";
interface ISidebar {
  className?: string
}
function Sidebar({className}:ISidebar) {
  const [t] = useTranslation()
  const secondSegment = useSegment(2) ; //console.log(secondSegment)
  const [logOutMutation] = useLogoutMutation()
  const dispatch = useDispatch()
  const handleLogOut = async () =>{
    try{
      await logOutMutation({}).unwrap()
      dispatch(logout())
    }catch(error){

    }
  }
  return (
    <div className={` ${className} `}>
      <FlexCol className="items-center">
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
      </FlexCol>

      <CustomButton 
        onClick={handleLogOut} 
        className="px-3 py-2 rounded-lg border text-nowrap bg-transparent border-white text-white" 
        text={t("logOut")} direction={"right"}>
      </CustomButton>
    </div>
  )
}

export default Sidebar