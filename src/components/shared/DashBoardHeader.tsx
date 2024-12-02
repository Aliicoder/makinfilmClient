import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ConditionalDashboardMenu from '../conditionals/ConditionalDashboardMenu';
function DashboardHeader() {
  const [isOpenMenu,setIsOpenMenu] = useState(false)
  const [,{language,changeLanguage}] = useTranslation()

  const handleChangeLanguage = useCallback((lang:string)=>{
    changeLanguage(lang)
  },[])
  useEffect(() =>{
    document.documentElement.setAttribute("dir",language == "en" ? "ltr" : "rtl")
  },[language])
  return (
    <motion.div
      className="relative container mx-auto  flex justify-center flex-col items-center  mb-[7%] md:mb-[2%]
           lg:flex-row md:justify-between px-[10%]">
      <div className="grow basis-full md:basis-auto md:grow-0 flex justify-center items-center  
        c4 -mt-4 pt-2 px-[10%] md:px-0 border-[linear-gradient(108deg, rgba(0,0,0,0.3309698879551821) 17%, rgba(102,102,102,1) 100%)]  ">
      <svg className="c5 md:c2" width="9em" height="9em" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.0542 0.0551758H60.6014V11.1773H60.7092L66.8922 0.0551758H73.7652L67.0647 12.1323L73.4825 23.6963H66.2861L60.7092 13.8688H60.6014V23.6963H54.0542V0.0551758Z" fill="white"/>
        <path d="M3.14782 0.0327148H11.5204C12.7158 5.1377 13.6549 9.52765 14.3401 13.2026L15.0611 9.5324C15.3534 8.10234 15.6648 6.70791 16.0002 5.34912L17.2891 0.0327148H25.8366L29.1593 23.6952H22.6001L20.8297 7.42294L16.7429 23.6952H12.2607L7.97496 7.38969L6.26929 23.6952H0L3.14782 0.0327148Z" fill="white"/>
        <path d="M76.0474 0.0327148H82.6712V23.6952H76.0474V0.0327148Z" fill="white"/>
        <path d="M84.9561 0.0327148H91.6446L100.06 13.6801L99.8208 11.1287V0.0327148H106.445V23.6952H99.6459L91.405 10.2593L91.5799 13.2026V23.6952H84.9561V0.0327148Z" fill="white"/>
        <path d="M48.794 15.0085C48.8371 14.9871 49.2012 14.828 49.5845 15.0204C49.9702 15.2128 50.0564 15.5953 50.066 15.6428L51.7358 23.6601H31.0977L34.9666 4.74153L35.1438 3.87447L35.9104 0.123527L46.808 0L49.0168 10.6114C49.0982 10.9891 48.6239 11.2314 48.358 10.9511L42.9583 6.22148C42.0288 5.40667 40.5579 5.91979 40.3447 7.1313C39.6859 10.8917 39.0271 14.6522 38.3659 18.4102C38.2557 19.0445 38.9073 19.5434 39.499 19.2726C42.5965 17.852 45.6965 16.4291 48.794 15.0085Z" fill="white"/>
        <path d="M35.2226 3.71045L35.043 4.58701L35.2202 3.71045H35.2226Z" fill="white"/>
      </svg>
    </div>
    <div className='flex c7   gap-[20%] text-[#ffffff42] md:c3 rtl:flex-row-reverse '>
      <div onClick={()=>handleChangeLanguage("en")} 
        className={`${language == "en" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>English</div> 
      <div  onClick={()=>handleChangeLanguage("ar")} 
        className={`${language == "ar" ? "text-white font-semibold":""} transition-all cursor-pointer hover:text-[#ffffff9a]`}>عربي</div>
    </div>
    <div onClick={()=>setIsOpenMenu(prev=>!prev)} className='absolute top-0 right-0 md:hidden p-[7%] cursor-pointer'>
      <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6ZM4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18ZM11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z" fill="white"/>
          </svg>
    </div>
    <ConditionalDashboardMenu condition={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
  </motion.div>
  )
}

export default DashboardHeader

