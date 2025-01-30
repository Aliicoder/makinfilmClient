import FlexCol from "@/components/styled/FlexCol";
import FlexColContainer from "@/components/styled/FlexColContainer";
import FlexRow from "@/components/styled/FlexRow";
import Text from "@/components/styled/Text";
import useServices from "@/hooks/useServices";
import { motion } from "framer-motion"
import { t } from "i18next"
import { memo } from "react";
import { v4 as uuid4 } from 'uuid';
const Services = memo(function Services() {
  const SERVICES  = useServices()
  return (
    <FlexColContainer >
      <FlexRow className="p-10">
        <Text className="z-10 fs-25 text-white  bg-black font-semibold 
          md:c5 md:p-[2%]">
          {t("services")}
        </Text>
      </FlexRow>
      <FlexCol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}} 
        className="gap-16 md:grid md:grid-cols-2">
        {
          SERVICES.map((service,i:number)=>(
            <motion.div
              key={uuid4()}
              initial={{ opacity :0 , y : 60}}
              whileInView={{ opacity :1 , y : 0 ,transition:{
                type : "tween" , duration : 0.5 , delay : i * 0.5 , ease : "easeInOut"
              }}}
              viewport={{once:true}}
            >
              {service}
            </motion.div>
          ))
        }
      </FlexCol>  
    </FlexColContainer>
  )
})

export default Services