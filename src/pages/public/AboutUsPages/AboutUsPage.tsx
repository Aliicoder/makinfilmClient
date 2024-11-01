import { motion } from "framer-motion"
import { lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
const PartnersCarousel = lazy(()=>import("@/components/Carousels/PartnersCarousel"))
const AboutMakin = lazy(()=>import("@/components/general/AboutMakin"))
const ContactUs = lazy(()=>import("@/components/shared/ContactUs"))

function AboutUsPage() {
  const [t] = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 , animation:"ease"}}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="container text-white mx-auto">
      <Suspense fallback={null}><AboutMakin /></Suspense>
      <div className="font-bold p-[6%]">
        <div className="relative flex justify-center">
          <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">{t("partners")}</h1>
          <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
        </div>
        <Suspense fallback={null}><PartnersCarousel /></Suspense>
      </div>
      <Suspense fallback={null}><ContactUs /></Suspense>
    </motion.div>
  )
}

export default AboutUsPage