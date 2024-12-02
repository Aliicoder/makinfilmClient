import useInitialRendersCounter from "@/hooks/useRendersCount"
import { motion } from "framer-motion"
import {lazy, memo } from "react"
const Hero = lazy(()=>import("@/components/dedicated/HomePage/Hero"))
const BehindTheSince = lazy(()=>import("@/components/dedicated/HomePage/BehindTheSince"))
const RecentWork = lazy(()=>import("@/components/dedicated/HomePage/RecentWork"))
const Services = lazy(()=>import("@/components/dedicated/HomePage/Services"))
const HomePage = memo(function HomePage() {  
  useInitialRendersCounter("HomePage")
  return (
     <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="relative scroll-smooth">
      <Hero />
      <BehindTheSince />
      <RecentWork />
      <Services />
     </motion.div>
  )
})

export default HomePage