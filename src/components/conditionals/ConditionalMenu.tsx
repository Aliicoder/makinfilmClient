import { motion } from 'framer-motion'
import { RxCross1 } from "react-icons/rx";
import LinkButton from "../buttons/LinkButton";
import { useTranslation } from 'react-i18next';
import { memo, SetStateAction, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useSegment from '@/hooks/useSegment';
interface ConditionalMenu {
  condition : boolean
  setIsOpenMenu: React.Dispatch<SetStateAction<boolean>>
}
const ConditionalMenu = memo(function ConditionalMenu({condition,setIsOpenMenu}:ConditionalMenu) {
  const [t,{language}] = useTranslation()
  const redirect = useNavigate()
  const  firstSegment = useSegment(1)
  const handleGoToAndClose = useCallback((link:string)=>{
    redirect(link)
    setIsOpenMenu(false)
  },[])
  return (
    <>
      {
        condition &&
        <motion.div 
        initial={{ x:"100%"}}
        animate={{ x:"0%" }}
        transition={{ type : "tween" }}
        exit={{ opacity:0 }}
        layout
        className="fixed bg-black top-0 left-0 flex justify-end w-full h-full md:hidden rtl:flex-row-reverse">
        <div className="w-1/3 flex justify-center mb-[20%] items-center ">
          <RxCross1 onClick={()=>setIsOpenMenu(false)} className="text-white c9"/>
        </div>
        <motion.div
          initial={{width:"0%"}}
          animate={{width:"100%"}}
          transition={{duration:1}}
          layout
          className="w-2/3 h-full text-white flex flex-col justify-between bg-[#d4d4d420] ">
          <div />
          <ul
            style={{ direction: language == "ar" ? "ltr" : "ltr"}} 
            className="c9 text-[#ffffff42]">
            <li
              onClick={()=>handleGoToAndClose("")} 
              className={` ${firstSegment == "" ? "text-white font-bold" : ""}
              text-end p-[6%] `}>{t("navigators.home")}</li>
            <li
              onClick={()=>handleGoToAndClose("aboutUs")}  
              className={` ${firstSegment == "aboutUs" ? "text-white font-bold" : ""}
              text-end p-[6%] `}>{t("navigators.about")}</li>
            <li 
              onClick={()=>handleGoToAndClose("videos")} 
              className={` ${firstSegment == "videos" ? "text-white font-bold" : ""}
              text-end p-[6%] `}>{t("navigators.videos")}</li>
            <li
              onClick={()=>handleGoToAndClose("photos")}  
              className={` ${firstSegment == "photos" ? "text-white font-bold" : ""}
              text-end p-[6%] `}>{t("navigators.photos")}</li>
          </ul>
          <div className="flex justify-center p-[6%] mb-[6%]">
          <LinkButton  className="border text-nowrap border-white bg-transparent px-[4%] py-[4%] " text={`${t("dashboard")}`} direction={"right"} to={"/dashboard"}>
          </LinkButton>
        </div>
        </motion.div>
      </motion.div>
      }
    </>
  )
})

export default ConditionalMenu