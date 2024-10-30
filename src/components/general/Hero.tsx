import { memo } from 'react'
import { lazy } from 'react'
import {Squircle} from "corner-smoothing"
const Intro = lazy(() =>import('./Intro'))
const Hero = memo(function Hero() {
  return (
    <div  className="container relative  text-white montserrat overflow-hidden mx-auto">
      <div className='relative flex flex-col mx-[6%] h-full'>
        <div className='absolute w-full h-full origin-center'>
          <Squircle cornerRadius={16} className='border border-transparent h-full w-full rtl:-scale-x-[100%]'>
            <img className='object-cover w-full h-full object-center' src="/images/hero3.jpg" alt="" />
          </Squircle>
        </div>
        <Intro />
      </div>
    </div>
  )
})

export default Hero