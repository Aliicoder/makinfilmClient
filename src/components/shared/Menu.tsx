import { useState } from "react"
import Fixed from "../styled/Fixed"
import Flex from "../styled/Flex"
import useSegment from "@/hooks/useSegment"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { RxCross1 } from "react-icons/rx"
import FlexCol from "../styled/FlexCol"
import Text from "../styled/Text"
import FlexRow from "../styled/FlexRow"
const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false) 
  const [t,{language}] = useTranslation()
  const navigate = useNavigate()
  const  firstSegment = useSegment(1)
  const handleNavigation = (link:string) => {
    navigate(link)
    setIsOpenMenu(false)
  } 
  return (
    <>
      <Fixed className="z-[100] p-6 cursor-pointer top-0 right-0
        md:hidden ">
        <FlexRow onClick={()=>setIsOpenMenu((prev)=>!prev)} 
          className="p-3 bg-[#FFFFFF10] backdrop-blur rounded-lg cursor-pointer text-white
            rtl:justify-end">    
          {
            isOpenMenu ?
              <RxCross1 className="fs-31"/>
            :
            <svg className="fs-31" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6ZM4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18ZM11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z" fill="white"/>
            </svg>
          }
        </FlexRow>
      </Fixed>
      { isOpenMenu &&
      <Flex
        initial={{ x:"100%"}}
        animate={{ x:"0%" }}
        transition={{ type : "tween" }}
        exit={{ opacity:0 }}
        layout
        className="fixed z-40  top-0 left-0 w-full h-full flex justify-center items-center bg-[#FFFFFF10] backdrop-blur-sm transition-all
          md:hidden rtl:flex-row-reverse"> 
        <FlexCol
          style={{ direction: language == "ar" ? "ltr" : "ltr"}} 
          className="fs-31 gap-6 text-[#ffffff42] text-white">
          <Text
            onClick={()=>handleNavigation("")} 
            className={` ${firstSegment == "" ? " font-bold " : ""} text-center cursor-pointer`}>
              {t("navigators.home")}
          </Text>
          <Text
            onClick={()=>handleNavigation("aboutUs")}  
            className={` ${firstSegment == "aboutUs" ? " font-bold" : ""} text-center cursor-pointer`}>
              {t("navigators.about")}
          </Text>
          <Text
            onClick={()=>handleNavigation("equipments")}  
            className={` ${firstSegment == "equipments" ? " font-bold" : ""} text-center cursor-pointer`}>
              {t("navigators.equipments")}
          </Text>
          <Text 
            onClick={()=>handleNavigation("videos")} 
            className={` ${firstSegment == "videos" ? " font-bold " : ""} text-center cursor-pointer`}>
              {t("navigators.videos")}
          </Text>
          <Text
            onClick={()=>handleNavigation("photos")}  
            className={` ${firstSegment == "photos" ? " font-bold " : "" } text-center cursor-pointer`}>
              {t("navigators.photos")}
          </Text>
        </FlexCol>
      </Flex>
      }
    </>
  )
}

export default Menu

{/* <LinkButton  className="border text-nowrap border-white bg-transparent px-[4%] py-[4%] " text={`${t("dashboard")}`} direction={"right"} to={"/login"}>
        </LinkButton> */}