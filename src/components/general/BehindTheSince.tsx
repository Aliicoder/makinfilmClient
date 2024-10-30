import { memo } from "react"
import LinkButton from "../buttons/LinkButton"
import { FiArrowUpRight } from "react-icons/fi"
import { Squircle } from "corner-smoothing"
import { useTranslation } from "react-i18next"
const BehindTheSince = memo(function BehindTheSince() {
  const [t] = useTranslation()
  return (
   <div className="container mx-auto c9 mt-[6%] p-[3%]">
    <div className="relative flex justify-center  ">
      <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%] ">{t("behindTheSince")} </h1>
      <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
    </div>
    <div className=" columns-2  gap-0  my-[6%] md:columns-4">
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent rounded-[16px]">
          <img className="w-full" src="/images/1.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/2.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/3.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/4.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/5.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/6.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/7.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
      <div className="p-[6%]">
        <Squircle cornerRadius={16} className="border-transparent  rounded-[16px]">
          <img className="w-full" src="/images/8.jpg" loading="lazy" alt="" />
        </Squircle>
      </div>
    </div>
    <div className="flex font-normal justify-end p-[6%] rtl:justify-start">
      <LinkButton className="bg-white c8 text-black px-[4%] py-[2%] border ring-4 md:px-[2%] md:py-[1%] md:c3
       ring-[#fafafa42] outline-8 outline-[#fafafa28] outline " text={`${t("ViewMoreButton")}`} to={"/photos"} direction={"right"}>
        <FiArrowUpRight />
      </LinkButton>
    </div>
   </div>
  )
}
)
export default BehindTheSince