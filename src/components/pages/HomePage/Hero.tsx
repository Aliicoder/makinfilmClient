import { useEffect, useRef } from 'react'
import FlexCol from '@/components/styled/FlexCol'
import { useTranslation } from 'react-i18next'
import { FiArrowUpRight } from 'react-icons/fi'
import Text from '@/components/styled/Text'
import SquircleBorder from '@/components/borders/SquircleBorder'
import CustomButton from '@/components/buttons/CustomButton'
import RelativeFlexColContainer from '@/components/styled/RelativeFlexColContainer'
import Frame from '@/components/styled/Frame'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const refButton = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()
  const [t] = useTranslation()

  const contactOnWhatsApp = () => {
    const phoneNumber = "+966533899206"
    // const message = encodeURIComponent("Hello, I’d like to get in touch!")
    // const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`
    const whatsappURL = `https://wa.me/${phoneNumber}`
    window.open(whatsappURL, "_blank");
  };

  useEffect(()=>{
    if(refButton.current){
      let width = refButton.current.clientWidth ; console.log("width: ",width)
      document.documentElement.style.setProperty('--button-width', `${width}px`)
    }
  },[])
  
  return (
    <RelativeFlexColContainer
      initial={{ opacity: 0, scale:0.5 }}
      animate={{ opacity:1 , scale:1 }}
      viewport={{once:true}}
      className="text-white montserrat mt-6 ">
        <FlexCol className="z-10 p-3 font-semibold rtl:justify-end">
          <Text className='fs-49 p-10 pb-2'> {t("MKN.part1")} </Text>
          <Text className='fs-49 px-10'> {t("MKN.part2")} </Text>
          <Text className='fs-49 p-10 pt-2'> {t("MKN.part3")} </Text>
          <Text className="p-10 fs-20 w-11/12
            md:w-6/12">
            {t("intro")}
          </Text>

          <FlexCol className="z-10 p-10 gap-6 font-normal justify-center items-center
            md:flex-row md:justify-start">
            <CustomButton 
              onClick={()=>navigate("/aboutUs")}
              className="gap-2 p-3 py-2 flex items-center  border rounded-lg bg-white text-black" 
              text={`${t("ViewMoreButton")}`} direction={"right"}>
              <FiArrowUpRight />
            </CustomButton>
            <CustomButton 
              onClick={contactOnWhatsApp}
              style={{ width: "var(--button-width)"}}
              className=" gap-2 p-3 py-2  border-white rounded-md border">
              {t("contactButton")}
            </CustomButton>
          </FlexCol>

        </FlexCol>        

        <Frame className='p-3 absolute w-full h-full'>
          <SquircleBorder className='w-full h-full'>
            <img className='object-cover w-full h-full object-center' src="/images/hero3.jpg" alt="" />
          </SquircleBorder>
        </Frame>
        
    </RelativeFlexColContainer>
  )
}

export default Hero