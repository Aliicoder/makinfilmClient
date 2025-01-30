import Flex from "@/components/styled/Flex"
import FlexColContainer from "@/components/styled/FlexColContainer"
import FlexRow from "@/components/styled/FlexRow"
import Text from "@/components/styled/Text"
import useInitialRendersCounter from "@/hooks/useRendersCount"
import { lazy } from "react"
import { useTranslation } from "react-i18next"
const PartnersCarousel = lazy(()=>import("@/components/Carousels/PartnersCarousel"))

function AboutUsPage() { useInitialRendersCounter("AboutUsPage")
  const [t] = useTranslation()
  return (
    <FlexColContainer
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="container text-white mx-auto">
      <Flex className="p-10 justify-center">
        <Text className="w-3/4 font-semibold text-center text-balance
          md:fs-31">
          {t("aboutMakin")}
        </Text>
      </Flex>
      <FlexRow className="p-10">
        <Text className="z-10 fs-25 text-white  bg-black font-semibold 
          md:c5 md:p-[2%]">
          {t("partners")}
        </Text>
      </FlexRow>
      <PartnersCarousel />
    </FlexColContainer>
  )
}

export default AboutUsPage