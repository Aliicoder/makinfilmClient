import useServices from "@/hooks/useServices";
import { motion } from "framer-motion"
import { t } from "i18next"
import { memo } from "react";
import { v4 as uuid4 } from 'uuid';
const Services = memo(function Services() {
  const SERVICES  = useServices()
  return (
    <div  
      className="container mx-auto">
      <div className="relative flex justify-center">
        <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">{t("services")}</h1>
        <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}} 
        className="flex flex-col gap-0 md:grid md:grid-cols-2 md:gap-[6%]">
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
      </motion.div>  
    </div>
  )
})

export default Services