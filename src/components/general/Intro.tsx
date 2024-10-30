import { FiArrowUpRight } from "react-icons/fi"
import LinkButton from "../buttons/LinkButton"
import { memo } from "react"
import { useTranslation } from "react-i18next"

const Intro = memo(function Intro() {
  const { t } = useTranslation()
  return (
    <>
        <div className="relative flex flex-col z-10 font-bold text-[40px] p-[6%] my-[5%] md:my-[2%] rtl:justify-end">
          <h1>
          {t("MKN.part1")}
          </h1>
          <h1>
          {t("MKN.part2")}
          </h1>
          <h1>
          {t("MKN.part3")}
          </h1>
        </div>
        <div>
          <h1 className="relative z-10 font-semibold mb-[5%] px-[6%] c8 w-10/12 md:c4 md:w-3/4 ">
          {t("intro")}
          </h1>
        </div>
 
        <div className="relative z-10 flex gap-[4%] font-normal justify-center p-[10%] md:justify-start md:">
          <a  className="flex-nowrap  hidden md:block bg-transparent text-white font-s px-[4%] py-[2%] c8 md:c3 md:py-[1%] md:px-[2%]" href={"#contactUs"} >
            {t("contactButton")}
          </a>
          <LinkButton className="flex-nowrap bg-white text-black font-s px-[4%] py-[2%] c8 md:c3 md:py-[1%] md:px-[2%]
           border ring-4 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline " text={`${t("ViewMoreButton")}`} to={"aboutUs"} direction={"right"}>
            <FiArrowUpRight />
          </LinkButton>
        </div>
    </>
  )
})

export default Intro