import { memo, Suspense } from 'react'
import { lazy } from 'react'
import {Squircle} from "corner-smoothing"
import { motion } from 'framer-motion'
const Intro = lazy(() =>import('./Intro'))
const Hero = memo(function Hero() {
  return (
    <motion.div  
      initial={{ opacity: 0, scale:0.5 }}
      animate={{ opacity:1 , scale:1 , animation:"ease" , transition : {
        type: "tween"
      }}}
      viewport={{once:true}}
      className="container relative  text-white montserrat mx-auto overscroll-y-none  mt-[6%] md:mt-0">
      <div className='relative flex flex-col mx-[6%] h-full'>
        <div className='absolute w-full h-full origin-center'>
          <Squircle cornerRadius={16} className='border border-transparent h-full w-full rtl:-scale-x-[100%]'>
            <img className='object-cover w-full h-full object-center' src="/images/hero3.jpg" alt="" />
          </Squircle>
        </div>
        <Suspense><Intro /></Suspense>
      </div>
    </motion.div>
  )
})

export default Hero