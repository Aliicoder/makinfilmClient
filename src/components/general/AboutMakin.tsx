import { memo } from "react"
import { useTranslation } from "react-i18next"
const AboutMakin = memo(function AboutMakin() {
  const [t] = useTranslation()
  return (
    <div className=" p-[6%] ">
    <h1 className="w-3/4 font-semibold">
    {t("aboutMakin")}
    </h1>

  </div>
  )
})

export default AboutMakin