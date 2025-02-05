import CustomButton from '@/components/buttons/CustomButton';
import Makin from '@/components/customIcons/Makin';
import Block from '@/components/styled/Block';
import Fixed from '@/components/styled/Fixed';
import FlexCol from '@/components/styled/FlexCol';
import FlexRow from '@/components/styled/FlexRow';
import Text from '@/components/styled/Text';
import useSegment from '@/hooks/useSegment';
import { useLogoutMutation } from '@/store/apiSlices/authApiSlice';
import { logout } from '@/store/Reducers/authReducer';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RxCross1 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const [isOpenMenu,setIsOpenMenu] = useState(false)
  const [t,{language,changeLanguage}] = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logoutMutation] = useLogoutMutation()
  const secondSegment = useSegment(2)
  const handleChangeLanguage = useCallback((lang:string)=>{
    changeLanguage(lang)
  },[])
  const handleNavigation = (to:string) =>{
    navigate(to,{replace: true})
    setIsOpenMenu(false)
  }
    const handleLogOut = async () =>{
      try{
        await logoutMutation({}).unwrap()
        dispatch(logout())
      }catch(error){
  
      }
    }
  useEffect(() =>{
    document.documentElement.setAttribute("dir",language == "en" ? "ltr" : "rtl")
  },[language])
  return (
    <FlexRow className="px-10 pb-10 justify-center flex-col items-center lg:rtl:flex-row-reverse 
      md:pb-0 lg:flex-row md:justify-between">

      <Makin />

      <FlexRow className='gap-6 fs-20 text-[#ffffff42]  
        rtl:flex-row-reverse '>
        <Text onClick={()=>handleChangeLanguage("en")} 
          className={`${language == "en" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>
          English
        </Text> 
        <Text onClick={()=>handleChangeLanguage("ar")} 
          className={`${language == "ar" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>
          عربي
        </Text>
      </FlexRow>
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
      <FlexCol
        initial={{ x:"100%"}}
        animate={{ x:"0%" }}
        transition={{ type : "tween" }}
        exit={{ opacity:0 }}
        layout
        className="fixed z-40  top-0 left-0 w-full h-full flex justify-evenly items-center bg-[#FFFFFF10] backdrop-blur-sm transition-all
          md:hidden "> 
        <Block className={''}/>
        <FlexCol
          style={{ direction: language == "ar" ? "ltr" : "ltr"}} 
          className="fs-31  gap-6 text-[#ffffff42] text-white">

          <Text
            onClick={()=>handleNavigation("videos")} 
            className={` ${secondSegment == "" ? " font-bold " : ""} text-center cursor-pointer`}>
              {t("navigators.videos")}
          </Text>
          <Text
            onClick={()=>handleNavigation("photos")}  
            className={` ${secondSegment == "aboutUs" ? " font-bold" : ""} text-center cursor-pointer`}>
              {t("navigators.photos")}
          </Text>
        </FlexCol>
        <CustomButton 
          onClick={handleLogOut} 
          className="px-3 py-2 rounded-lg border text-nowrap bg-transparent border-white text-white" 
          text={t("logOut")} direction={"right"}>
        </CustomButton>
      </FlexCol>
      }
  </FlexRow>
  )
}

export default Header

