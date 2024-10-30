import { memo, useCallback, useEffect, useState } from "react"
import LinkButton from "../buttons/LinkButton"
import { FiArrowUpRight } from "react-icons/fi"
import { HiPlay } from "react-icons/hi2";
import { Squircle } from "corner-smoothing"
import { useFetchVideosMutation } from "@/store/Reducers/videoApiSlice";
import { IVideo } from "@/utils/types/types";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const RecentWork = memo(function RecentWork() {
  const [fetchVideosMutation] = useFetchVideosMutation()
  const [t,{language}] = useTranslation()
  const [videos,setVideos] = useState<IVideo[]|undefined>()
  const [,setPreviewVideo] = useState<IVideo|undefined>()
  const handleOpenPreviewer = useCallback((id:string)=>{ console.log("id >>",id)
    if( videos && videos?.length > 0){
      const video = videos.find((video:any) => video._id === id)
      setPreviewVideo(video)
    }
  },[])
  useEffect(() =>{
    const fetchVideos = async () =>{
       try{
         const response = await fetchVideosMutation({searchValue:"", curPage:1,perPage:8}).unwrap();console.log("response >>",response)
         toast.success(response.message)
         setVideos(response.videos)
       }catch(error:any){ console.log("error >>",error)
         toast.error(error.message ?? "try again later")
       }
    }
    fetchVideos()
   },[]);
  return (
    <div className="container mx-auto">
      <div className="relative flex justify-center">
        <h1 className="relative z-10 text-white c9 p-[6%] bg-black text-nowrap font-semibold md:c5 md:p-[2%]  ">{t("recentWork")} </h1>
        <div className="absolute z-0 top-1/2 bg-[#d4d4d420] blur-[0.5px] w-full h-[1px]"></div>
      </div>
      <div className="grid grid-cols-2 mx-auto  my-[6%] md:grid-cols-4">
        {
          videos&&videos.map((video:any) =>(
            <Squircle onClick={()=>handleOpenPreviewer(video._id)} key={video._id} cornerRadius={16} className="flex flex-col m-[6%] rounded-[16px] overflow-hidden">
            <div>
              <img className="w-full aspect-square object-cover  scale-105 grayscale" loading="lazy" src={video.image.url} alt="" />
            </div>
            <div className="bg-[#d4d4d420] p-[9%] pt-0">
              <div className="relative z-40">
                <div className="absolute top-0 right-0  flex justify-center items-center p-[5%] bg-white rounded-full">
                  <HiPlay className="c3 z m-[6%]]" />
                </div>
                <HiPlay className="opacity-0" />
              </div>
              <h1 className="text-white font-bold c6 md:c3 rtl:text-end ">
                {video.title[language]}
              </h1>
              <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2">
                {video.description[language]}
              </p>
            </div>
          </Squircle>
          ))
        }
      </div>
      <div className="flex font-normal justify-end p-[6%] rtl:justify-start">
        <LinkButton className="bg-white c8 text-black flex px-[4%] py-[2%] border md:px-[2%] md:py-[1%] md:c3 rtl:flex-row-reverse
         ring-4 ring-[#fafafa42] outline-8 outline-[#fafafa28] outline " text={`${t("ViewMoreButton")}`} to={"/videos"} direction={"right"}>
          <FiArrowUpRight />
        </LinkButton>
      </div>
    </div>
  )
})

export default RecentWork