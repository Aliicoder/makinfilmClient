import { Squircle } from 'corner-smoothing'
import useVideosPagination from '@/hooks/useVideosPagination'
import { useTranslation } from 'react-i18next'
import { HiPlay } from 'react-icons/hi2'
import { lazy , memo, useState } from 'react'
import { IVideo } from '@/utils/types/types'
import { motion } from 'framer-motion';
import useInitialRendersCounter from "@/hooks/useRendersCount";
import VideoPlayer from '@/components/conditionals/VideoPlayer'
const ContactUs = lazy(()=>import('@/components/shared/ContactUs'))
const Pagination = lazy(()=>import('@/components/shared/Pagination'))

const VideosPage = memo(function VideosPage() { useInitialRendersCounter("VideosPage")
  const [,{language}] = useTranslation()
  const [playVideo,setPlayVideo] = useState<IVideo|undefined>()
  const {videos, counter , handleLeft , handleRight} = useVideosPagination()
  const scrollTopAndLeft = () =>{
    window.scrollTo({top:0})
    handleLeft()
  }
  const scrollTopAndRight = () =>{
    window.scrollTo({top:0})
    handleRight()
  }
  return (
    <motion.div
      initial={{opacity:0}} 
      whileInView={{opacity:1 }} 
      exit={{opacity:0 , transition:{
        duration: 0.2
      }}}
      className=' container mx-auto h-full mt-[10%] '>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
      <div
        style={{ direction: language == "ar" ? "ltr" : "ltr"}} 
        className="grid grid-cols-2 md:grid-cols-4">
        {
          videos && videos.length > 0 ?
          videos.map((video:IVideo,i:number) => (
           <motion.div 
              key={video._id}
              initial={{ opacity: 0 , y: 60}}
              whileInView={{  opacity: 1 , y: 0 ,transition: {
                delay: i * 0.2 , ease:"easeInOut"
              }}}
              viewport={{ once: true}}
              >
              <Squircle onClick={()=>setPlayVideo(video)}   cornerRadius={16} className="flex flex-col m-[6%] rounded-[16px] overflow-hidden">
              <div>
                <img className="w-full aspect-square object-cover  scale-105 grayscale hover:grayscale-0 transition-all hover:scale-110" loading="lazy" src={video.image.url} alt="" />
              </div>
              <div className="bg-[#d4d4d420] p-[9%] pt-0">
                <div className="relative z-40">
                  <div className="absolute top-0 right-0  flex justify-center items-center rtl:right-auto
                  p-[5%] bg-white rounded-full">
                    <HiPlay className="c3 z m-[6%]]" />
                  </div>
                  <HiPlay className="opacity-0" />
                </div>
                <h1 className="text-white font-bold c6 md:c3 rtl:text-end text-nowrap ">
                  {video.title[language as "en" | "ar"]}
                </h1>
                <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2 rtl:text-end">
                  {video.description[language as "en" | "ar"]}
                </p>
              </div>
              </Squircle>
           </motion.div>
          ))
          :
          <div>
            <Squircle cornerRadius={16} className="flex flex-col m-[6%] rounded-[16px] overflow-hidden animate-pulse">
              <div>
                <img className="w-full aspect-square object-cover" loading="lazy" src={"placeholder/placeholder1.jpg"} alt="" />
              </div>
              <div className="bg-[#d4d4d420] p-[9%] pt-0">
                <div className="relative z-40 opacity-0">
                  <div className="absolute top-0 right-0  flex justify-center items-center rtl:right-auto
                  p-[5%] bg-white rounded-full">
                    <HiPlay className="c3 z m-[6%]]" />
                  </div>
                  <HiPlay className="opacity-0" />
                </div>
                <h1 className="text-white font-bold c6 md:c3 rtl:text-end opacity-0">
                  loading...
                </h1>
                <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2 rtl:text-end opacity-0">
                  loading...
                </p>
              </div>
              </Squircle>
           </div>
        }
      </div>
      {
        videos&&videos.length > 8 ?
        <Pagination className='flex mt-[10%]  justify-center text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
        :
        <></>
      }
      <ContactUs />
    </motion.div>
  )
}
)
export default VideosPage

