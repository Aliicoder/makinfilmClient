import useInitialRendersCounter from "@/hooks/useRendersCount"
import { motion } from "framer-motion"
import { lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
const PartnersCarousel = lazy(()=>import("@/components/Carousels/PartnersCarousel"))
const AboutMakin = lazy(()=>import("@/components/dedicated/AboutPage/AboutMakin"))

function AboutUsPage() { useInitialRendersCounter("AboutUsPage")
  const [t] = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="container text-white mx-auto">
      <AboutMakin />
      <div className="font-bold ">
        <div className="relative flex justify-center">
          <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">{t("partners")}</h1>
          <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
        </div>
        <PartnersCarousel />
      </div>
    </motion.div>
  )
}

export default AboutUsPage