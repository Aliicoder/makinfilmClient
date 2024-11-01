import { SERVICES } from "@/constants/services"
import { motion } from "framer-motion"
import { memo } from "react"
import { useTranslation } from "react-i18next"
const Services = memo(function Services() {
  const [t] = useTranslation()
  return (
    <div  
      className="container mx-auto">
      <div className="relative flex justify-center">
        <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]">{t("services")}</h1>
        <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
      </div>
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 ,animation:"ease"}} 
        className="flex flex-col md:grid md:grid-cols-2 md:gap-[6%]">
        {
          SERVICES.map((service,i) =>(
            <motion.div
            initial={{ scale : 0.5, opacity: 0 , y: 60}}
            whileInView={{ scale : 1 , opacity: 1 , y: 0 , animation: "ease" ,transition: {
              delay: i * 0.2
            }}}
            viewport={{ once: true}}
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