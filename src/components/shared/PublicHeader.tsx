import { memo, useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSegment from '@/hooks/useSegment';
import { useTranslation } from 'react-i18next';
import Sticky from '../styled/Sticky';
import FlexRowContainer from '../styled/FlexRowContainer';
import Flex from '../styled/Flex';
import Makin from '../customIcons/Makin';
import FlexRow from '../styled/FlexRow';
const Header = memo(function Header() {
  const location = useLocation()
  const [background,setBackground] = useState(false)
  const [t,{language,changeLanguage}] = useTranslation()
  const navigate = useNavigate()
  const firstSegment = useSegment(1)
  const handleChangeLanguage = useCallback((lang:string)=>{
    changeLanguage(lang)
    localStorage.setItem('language', lang)
  },[])
  useEffect(() =>{
    const trackScrolling = () =>{
      if(window.scrollY > 0)
        setBackground(true)
      else
        setBackground(false)
    }
    window.addEventListener("scroll",trackScrolling)
    return ()=> window.removeEventListener("scroll",trackScrolling)
  },[]);
  useEffect(() =>{
    window.scrollTo({top:0,behavior:"instant"})
  },[location])
  return (
   <Sticky className={` z-30 ${background ? "md:bg-[#d4d4d420] md:backdrop-blur" : ""} 
    static md:sticky md:top-0 `} >
    <FlexRowContainer
      className={`px-10 justify-center flex-col items-center lg:rtl:flex-row-reverse 
          lg:flex-row md:justify-between`}>
          
      <Flex onClick={()=>navigate("/")} 
          className="-mt-4 pt-2 justify-center items-center cursor-pointer
          border-[linear-gradient(108deg, rgba(0,0,0,0.3309698879551821) 17%, rgba(102,102,102,1) 100%)] ">
          <Makin />
      </Flex>

      <FlexRow className='hidden md:flex justify-between ga  text-[#ffffff42] '>
        <ul className='flex gap-[10%] font-semibold text-nowrap'>
          <Link to={""} replace
            className={`${firstSegment == "" ? "text-white":""} cursor-pointer transition-all hover:text-[#ffffff9a]`} >
            {t("navigators.home")}
          </Link>
          <Link to={"aboutUs"} replace
            className={`${firstSegment == "aboutUs" ? "text-white":""} cursor-pointer transition-all hover:text-[#ffffff9a]`}>
            {t("navigators.about")}
          </Link>
          <Link to={"equipments"} replace
            className={`${firstSegment == "equipments" ? "text-white":""} cursor-pointer transition-all hover:text-[#ffffff9a]`}>
            {t("navigators.equipments")}
          </Link>
          <Link to={'videos'}  replace
            className={`${firstSegment == "videos" ? "text-white":""} cursor-pointer transition-all hover:text-[#ffffff9a]`}>
            {t("navigators.videos")}
          </Link>
          <Link to={"photos"} replace
            className={`${firstSegment == "photos" ? "text-white":""} cursor-pointer transition-all hover:text-[#ffffff9a]`}>
            {t("navigators.photos")}
          </Link>
        </ul>
        
      </FlexRow>

      <FlexRow className='c7 gap-10 text-[#ffffff42]  
        md:c3 rtl:flex-row-reverse '>
        <div onClick={()=>handleChangeLanguage("en")} 
          className={`${language == "en" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>English</div> 
        <div  onClick={()=>handleChangeLanguage("ar")} 
          className={`${language == "ar" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>عربي</div>
      </FlexRow>

    </FlexRowContainer>
   </Sticky>
  )
})

export default Header
