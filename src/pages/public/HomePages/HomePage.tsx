import useInitialRendersCounter from "@/hooks/useRendersCount"
import { motion } from "framer-motion"
import {lazy, memo, Suspense} from "react"
const Hero = lazy(()=>import("@/components/general/Hero"))
const BehindTheSince = lazy(()=>import("@/components/general/BehindTheSince"))
const RecentWork = lazy(()=>import("@/components/general/RecentWork"))
const Services = lazy(()=>import("@/components/general/Services"))
const ContactUs = lazy(()=>import("@/components/shared/ContactUs"))

const HomePage = memo(function HomePage() {  useInitialRendersCounter("HomePage")

  return (
     <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className="relative overflow-x-hidden scroll-smooth">
      <Suspense fallback={null}><Hero /></Suspense>
      <Suspense fallback={null}><BehindTheSince /></Suspense>
      <Suspense fallback={null}><RecentWork /></Suspense>
      <Suspense fallback={null}><Services /></Suspense>
      <Suspense fallback={null}><ContactUs /></Suspense>
     </motion.div>
  )
})

export default HomePage