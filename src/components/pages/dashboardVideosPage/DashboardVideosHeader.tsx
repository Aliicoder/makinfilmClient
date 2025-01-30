import { CiSearch } from "react-icons/ci"
import { motion } from "framer-motion"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { IoMdAdd } from "react-icons/io";
import LinkButton from "@/components/buttons/LinkButton";

interface DashboardVideosHeader {
  onSearchChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}
const DashboardVideosHeader = memo( function DashboardPhotosHeader({onSearchChange}:DashboardVideosHeader) {
  const [t] = useTranslation();

  return (
  <div className="flex  gap-6  justify-between items-center  mb-[2%] mx-[1%] rounded-md p-[1%] rtl:flex-row-reverse ">
    <div className='flex relative overflow-hidden  gap-4  '>  
      <div className='flex items-center ml-[3%] bg-[#d4d4d420] rounded-md overflow-hidden'>
        <div className="c8 md:c4  mx-[4%]">
          <CiSearch  className="m-1 cursor-pointer"/>
        </div>
        <motion.input 
          onChange={onSearchChange}
          placeholder={`${t("search")}`}  
          className={`max-w-[300px]  py-2  c8 md:c3  rounded-lg bg-transparent transition-all  outline-none`}
          type="text" />   
      </div>
    </div>
    <div className="flex items-center gap-[10%] pr-[8%]  ">
      <LinkButton  className=" bg-white c8 text-black flex px-[4%] py-[2%] border md:px-[2%] md:py-[1%] md:c3 rtl:flex-row-reverse
     ring-4 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline text-nowrap gap-2 "  to={`addVideo`} text={t("addVideo")}  direction={"left"}>
        <IoMdAdd className=' p-[2%] c8  md:c3'/>
      </LinkButton>
    </div>
  </div>
  )
})

export default DashboardVideosHeader