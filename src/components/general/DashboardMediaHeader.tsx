import { CiSearch } from "react-icons/ci"
import LinkButton from "../buttons/LinkButton"
import { motion } from "framer-motion"
import { IoAddCircleOutline } from "react-icons/io5"
import { memo } from "react"
import { useTranslation } from "react-i18next"

interface DashboardMediaHeader {
  url:string
  onSearchChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}
const DashboardMediaHeader = memo( function DashboardPhotosHeader({onSearchChange,url}:DashboardMediaHeader) {
  const [t] = useTranslation()
  return (
    <div className="flex justify-between items-center mb-[2%] mx-[1%] rounded-md p-[1%] rtl:flex-row-reverse ">
    <div className='flex relative overflow-hidden  gap-4  '>  
      <div className='flex items-center ml-[3%] bg-[#d4d4d420] rounded-md overflow-hidden'>
        <div className="c4  mx-[4%]">
          <CiSearch  className="m-1 cursor-pointer"/>
        </div>
        <motion.input 
          onChange={onSearchChange}
          placeholder={`${t("search")}`}  
          className={`max-w-[300px]  py-2  c3  rounded-lg bg-transparent transition-all  outline-none`}
          type="text" />   
      </div>
    </div>
    <div className="flex items-center gap-[10%] pr-[8%]">
      <LinkButton  className="bg-white c8 text-black flex px-[4%] py-[2%] border md:px-[2%] md:py-[1%] md:c3 rtl:flex-row-reverse
     ring-4 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline text-nowrap "  to={`add${url}`} text={`add ${url}`}  direction={"left"}>
        <IoAddCircleOutline className='c3'/>
      </LinkButton>
    </div>
  </div>
  )
})

export default DashboardMediaHeader