import PartnersCarousel from "@/components/Carousels/PartnersCarousel"
import AboutMakin from "@/components/general/AboutMakin"
import { useTranslation } from "react-i18next"

function AboutUsPage() {
  const [t] = useTranslation()
  return (
    <div className="container text-white mx-auto">
      <AboutMakin />
      <div className="font-bold p-[6%]">
        <div className="relative flex justify-center">
          <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">{t("partners")}</h1>
          <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
        </div>
        <PartnersCarousel />
      </div>
    </div>
  )
}

export default AboutUsPage