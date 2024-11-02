import { memo, useEffect, useState } from "react"
import LinkButton from "../buttons/LinkButton"
import { FiArrowUpRight } from "react-icons/fi"
import { HiPlay } from "react-icons/hi2";
import { Squircle } from "corner-smoothing"
import { useFetchVideosMutation } from "@/store/Reducers/videoApiSlice";
import { IVideo } from "@/utils/types/types";
import { useTranslation } from "react-i18next";
import IconButton from "../buttons/IconButton";
import { IoCaretBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const RecentWork = memo(function RecentWork() {
  const [fetchVideosMutation] = useFetchVideosMutation()
  const [t,{language}] = useTranslation()
  const [playVideo,setPlayVideo] = useState<IVideo|undefined>()
  const [videos,setVideos] = useState<IVideo[]|undefined>()
  useEffect(() =>{
    const fetchVideos = async () =>{
       try{
         const response = await fetchVideosMutation({searchValue:"", curPage:1,perPage:8}).unwrap();console.log("response >>",response)
         //toast.success(response.message)
         setVideos(response.videos)
       }catch(error:any){ console.log("error >>",error)
         //toast.error(error.message ?? "try again later")
       }
    }
    fetchVideos()
   },[]);
  return (
    <motion.div
      initial={{opacity:0}} 
      whileInView={{opacity:1 , animation: "ease"}} 
      className=" container mx-auto p-[3%]">
      <div className="relative flex justify-center">
        <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]  ">{t("recentWork")} </h1>
        <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
      </div>
      {
        playVideo &&
        <div className='fixed top-0 left-0 bg-black  z-50 w-[100%] h-[100%] '>
          <div className='relative grid place-items-center w-lvw h-lvh text-white'>
            <IconButton onClick={()=>setPlayVideo(undefined)} className='flex items-center c4 absolute top-10 left-10' text='Back' direction={'left'}>
              <IoCaretBackOutline />
            </IconButton>
            <div className='flex flex-col'>
              <video controls autoPlay>
                <source src={playVideo?.video.url} />
              </video>
              <h1 className='c5 p-[5%] font-semibold'>{playVideo.title[language as "en" | "ar"]}</h1>
              <p className='c4 px-[5%]'>{playVideo.description[language as "en" | "ar"]}</p>
            </div>
          </div>
        </div>
      }
      <div
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="grid grid-cols-2 mx-auto  my-[6%] md:grid-cols-4">
        {
          videos&&videos.map((video:IVideo,i) =>(
           <motion.div
              key={video._id}
              initial={{  opacity: 0 , y: 60}}
              whileInView={{ opacity: 1 , y: 0 , animation: "ease" ,transition: {
                delay: i * 0.2
              }}}
              viewport={{ once: true}}
              >
              <Squircle onClick={()=>setPlayVideo(video)} key={video._id} cornerRadius={16} className="flex flex-col m-[6%] rounded-[16px] overflow-hidden cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img className="w-full h-full  object-cover  scale-105 grayscale hover:grayscale-0 transition-all hover:scale-110" loading="lazy" src={video.image.url} alt="" />
              </div>
              <div className="bg-[#d4d4d420] p-[9%] pt-0">
                <div className="relative z-40">
                  <div className="absolute top-0 right-0  flex justify-center items-center p-[5%] bg-white rounded-full">
                    <HiPlay className="c3 z m-[6%]]" />
                  </div>
                  <HiPlay className="opacity-0" />
                </div>
                <h1 className="text-white font-bold c6 md:c3 rtl:text-end ">
                  {video.title[language as "ar" | "en"]}
                </h1>
                <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2">
                  {video.description[language as "ar" | "en"]}
                </p>
              </div>
            </Squircle>
           </motion.div>
          ))
        }
      </div>
      <div className="flex font-normal justify-end p-[6%] rtl:justify-start">
        <LinkButton className="bg-white c8 text-black flex px-[4%] py-[2%] border md:px-[2%] md:py-[1%] md:c3 
         ring-4 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline " text={`${t("ViewMoreButton")}`} to={"/videos"} direction={"right"}>
          <FiArrowUpRight />
        </LinkButton>
      </div>
    </motion.div>
  )
})

export default RecentWork