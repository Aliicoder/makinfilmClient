import { memo } from "react"
import { useTranslation } from "react-i18next"
const AboutMakin = memo(function AboutMakin() {
  const [t] = useTranslation()
  return (
  <div className=" flex justify-center p-[6%] ">
    <h1 className="w-3/4 font-semibold text-center text-balance md:c7">
      {t("aboutMakin")}
    </h1>
  </div>
  )
})

export default AboutMakin