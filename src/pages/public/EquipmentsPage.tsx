
import { useTranslation } from 'react-i18next'
import FlexColContainer from '@/components/styled/FlexColContainer'
import Grid from '@/components/styled/Grid'
import Frame from '@/components/styled/Frame'
import FlexCol from '@/components/styled/FlexCol'
import Text from '@/components/styled/Text'
import FlexRow from '@/components/styled/FlexRow'

const EquipmentsPage = () => {
  const [t,{language}] = useTranslation()
  const EQUIPMENTS = [
    {
      url: "/equipments/cameras.avif",
      title: t("equipments.cameras"),
    },
    {
      url: "/equipments/lighting.avif",
      title: t("equipments.lighting"),
    },
    {
      url: "/equipments/sound.avif",
      title: t("equipments.sound"),
    },
    {
      url: "/equipments/lenses.avif",
      title: t("equipments.lenses"),
    },
  ]
  return (
    <FlexColContainer
      className='mt-6'
      initial={{opacity:0}} 
      whileInView={{opacity:1 }} 
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}>
      <FlexRow className="p-12">
        <Text className="z-10 fs-16 w-9/12 text-white bg-black font-semibold">
          {t("equipments.title")}
        </Text>
      </FlexRow>
      <Grid
        style={{ direction: language == "ar" ? "ltr" : "ltr"}} 
        className="grid-cols-2 md:grid-cols-4">
        { EQUIPMENTS.map((equipment) => (
          <FlexCol className='items-center justify-between'>
             <Frame key={equipment.title}
              className='p-6'>
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all"
                src={equipment.url}
              />
            </Frame>
            <Text className='text-white'>
              {equipment.title}
            </Text>
          </FlexCol>
        ))
      
      }
      </Grid>
    </FlexColContainer>
  )
}

export default EquipmentsPage

