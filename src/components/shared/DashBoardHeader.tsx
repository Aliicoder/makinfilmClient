import { motion } from 'framer-motion'
import { Squircle } from "corner-smoothing"
import { HiMenu } from "react-icons/hi";
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBaseUrl from '@/hooks/useBaseUrl';
import { RxCross1 } from 'react-icons/rx';
import IconButton from '../buttons/IconButton';
import { LuLogOut } from "react-icons/lu";

function DashboardHeader() {
  const redirect = useNavigate()
  const { baseUrl } = useBaseUrl()
  const [isOpenMenu,setIsOpenMenu] = useState(false)
  const handleGoTo = useCallback((link:string)=>{
    redirect(link)
    setIsOpenMenu(false)
  },[])
  const logOut = useCallback(()=>{

  },[])
  return (
    <motion.div
      className="container flex justify-center md:px-[10%] items-center mx-auto md:sticky top-0 h-[100px] md:justify-between z-40  ">
      <Squircle cornerRadius={16} className="grow flex justify-center items-center  
        c4 -mt-4 pt-2 px-[10%] md:px-0 border-[linear-gradient(108deg, rgba(0,0,0,0.3309698879551821) 17%, rgba(102,102,102,1) 100%)]  ">
      <svg className="c5 md:c2" width="9em" height="9em" viewBox="0 0 107 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.0542 0.0551758H60.6014V11.1773H60.7092L66.8922 0.0551758H73.7652L67.0647 12.1323L73.4825 23.6963H66.2861L60.7092 13.8688H60.6014V23.6963H54.0542V0.0551758Z" fill="white"/>
        <path d="M3.14782 0.0327148H11.5204C12.7158 5.1377 13.6549 9.52765 14.3401 13.2026L15.0611 9.5324C15.3534 8.10234 15.6648 6.70791 16.0002 5.34912L17.2891 0.0327148H25.8366L29.1593 23.6952H22.6001L20.8297 7.42294L16.7429 23.6952H12.2607L7.97496 7.38969L6.26929 23.6952H0L3.14782 0.0327148Z" fill="white"/>
        <path d="M76.0474 0.0327148H82.6712V23.6952H76.0474V0.0327148Z" fill="white"/>
        <path d="M84.9561 0.0327148H91.6446L100.06 13.6801L99.8208 11.1287V0.0327148H106.445V23.6952H99.6459L91.405 10.2593L91.5799 13.2026V23.6952H84.9561V0.0327148Z" fill="white"/>
        <path d="M48.794 15.0085C48.8371 14.9871 49.2012 14.828 49.5845 15.0204C49.9702 15.2128 50.0564 15.5953 50.066 15.6428L51.7358 23.6601H31.0977L34.9666 4.74153L35.1438 3.87447L35.9104 0.123527L46.808 0L49.0168 10.6114C49.0982 10.9891 48.6239 11.2314 48.358 10.9511L42.9583 6.22148C42.0288 5.40667 40.5579 5.91979 40.3447 7.1313C39.6859 10.8917 39.0271 14.6522 38.3659 18.4102C38.2557 19.0445 38.9073 19.5434 39.499 19.2726C42.5965 17.852 45.6965 16.4291 48.794 15.0085Z" fill="white"/>
        <path d="M35.2226 3.71045L35.043 4.58701L35.2202 3.71045H35.2226Z" fill="white"/>
      </svg>
    </Squircle>
    
    <div onClick={()=>setIsOpenMenu(prev=>!prev)} className='md:hidden px-[10%]'>
      <HiMenu className='c9' />
    </div>
    {
      isOpenMenu&&
      <div className="fixed bg-black top-0 left-0 z-30 flex justify-end w-full h-full">
      <div className="w-2/3 h-full text-white flex flex-col justify-between bg-[#d4d4d420]">
        <div />
        <div>    
          <ul className="c9 text-[#ffffff42]">
            <li
              onClick={()=>handleGoTo("/")} 
              className={` ${baseUrl == "" ? "text-white font-bold" : ""}
              text-end p-[6%]`}>Home</li>
            <li
              onClick={()=>handleGoTo("/dashboard")} 
              className={` ${baseUrl == "" ? "text-white font-bold" : ""}
              text-end p-[6%]`}>Dashboard</li>
            <li 
              onClick={()=>handleGoTo("/dashboard/videos")} 
              className={` ${baseUrl == "videos" ? "text-white font-bold" : ""}
              text-end p-[6%]`}>Videos</li>
            <li
              onClick={()=>handleGoTo("/dashboard/photos")}  
              className={` ${baseUrl == "photos" ? "text-white font-bold" : ""}
              text-end p-[6%]`}>Photos</li>
          </ul>
        </div>
        <div className="flex justify-center p-[6%] mb-[6%]">
          <IconButton onClick={logOut} className=" bg-transparent px-[4%] py-[4%] "  text="Log out"   direction={"right"}>
            <LuLogOut />
          </IconButton>
        </div>
        <div className="flex justify-center mb-[20%] ">
          <RxCross1 onClick={()=>setIsOpenMenu(prev=>!prev)} className="text-white c9"/>
        </div>
      </div>
    </div>
    }
  </motion.div>
  )
}

export default DashboardHeader

