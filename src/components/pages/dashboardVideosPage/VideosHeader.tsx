import { CiSearch } from "react-icons/ci"
import { motion } from "framer-motion"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { IoMdAdd } from "react-icons/io";
import FlexRow from "@/components/styled/FlexRow";
import Flex from "@/components/styled/Flex";
import CustomButton from "@/components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";

interface DashboardVideosHeader {
  onSearchChange:(e: React.ChangeEvent<HTMLInputElement>) => void
}
const DashboardVideosHeader = memo( function DashboardPhotosHeader({onSearchChange}:DashboardVideosHeader) {
  const [t] = useTranslation();
  const navigate = useNavigate();
  return (
  <FlexRow className="gap-6 p-3 mb-[2%] mx-[1%] justify-center items-center  rounded-md 
    md:justify-between rtl:flex-row-reverse ">
    <FlexRow className='items-center ml-[3%] bg-[#d4d4d420] rounded-md overflow-hidden'>
      <Flex className="c8 md:c4  mx-[4%]">
        <CiSearch  className="m-1 cursor-pointer"/>
      </Flex>
      <motion.input 
        onChange={onSearchChange}
        placeholder={`${t("search")}`}  
        className={`max-w-[300px]  py-2  c8 md:c3  rounded-lg bg-transparent transition-all  outline-none`}
        type="text" />   
    </FlexRow>
    <Flex className="z-[100] fixed bottom-6 right-6 transition-all
      md:static ">
      <CustomButton 
          onClick={()=>navigate("addVideo")}
          className="gap-2 p-3 py-2 flex items-center text-nowrap  border rounded-lg bg-white text-black"
          text={`${t("addVideo")}`}
          direction={"right"}
        >
          <IoMdAdd />
        </CustomButton>
    </Flex>
  </FlexRow>
  )
})

export default DashboardVideosHeader