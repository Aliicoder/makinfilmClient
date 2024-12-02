import { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import useVideosPagination from '@/hooks/useVideosPagination'
import { HiPlay } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IVideo } from '@/utils/types/types'
import DeleteVideoPortal from '@/components/portals/DeleteVideoPortal'
import VideoPlayer from '@/components/conditionals/VideoPlayer'
import DashboardVideosHeader from '@/components/dedicated/dashboardVideosPage/DashboardVideosHeader'
import IconButton from '@/components/buttons/IconButton'
import { useNavigate } from 'react-router-dom'
import useInitialRendersCounter from '@/hooks/useRendersCount'
function DashboardVideosPage() {
  useInitialRendersCounter("DashboardVideosPage")
  const [t,{language}] = useTranslation()
  const navigate = useNavigate()
  const {timeouter} = useSetTimeout()
  const [clickedVideoId, setClickedVideoId] = useState("")
  const [playVideo,setPlayVideo] = useState<IVideo|undefined>()
  const [searchValue,setSearchValue] = useState("")
  const {videos, counter , handleLeft , handleRight} = useVideosPagination(searchValue)
  const [videoToBeDeleted,setVideoToBeDeleted] = useState<IVideo|undefined>() 
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   timeouter(()=>{
    if(searchValue !== value) 
      setSearchValue(value);
   },2000)
  },[searchValue])
  const scrollTopAndLeft = () =>{
    window.scrollTo({top:0})
    handleLeft()
  }
  const scrollTopAndRight = () =>{
    window.scrollTo({top:0})
    handleRight()
  }
  const handleMenuActionClick = (video:IVideo,action:string) =>{
    switch(action) {
      case "edit": 
        navigate(`Edit/${video._id}`,{state:video})
        break
      case "play": 
        setPlayVideo(video);
        break
      case "delete":
        setVideoToBeDeleted(video);
        break
    }
    setClickedVideoId("")
  }
  return (
   <div className=''>
    <DeleteVideoPortal  videoToBeDeleted={videoToBeDeleted} setVideoToBeDeleted={setVideoToBeDeleted} />
    <DashboardVideosHeader onSearchChange={handleSearchChange} />
    <VideoPlayer setPlayVideo={setPlayVideo} playVideo={playVideo} />
    <div className=' h-full '>
      <div
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="grid  gap-0 grid-cols-2 md:grid-cols-4 ">
        {
          videos&&videos.map((video:IVideo) =>(
            <div  key={video._id} onClick={()=>setClickedVideoId( clickedVideoId == video._id ? "" : video._id)} className="relative flex flex-col items-center p-[6%] " >
              <Squircle
                cornerRadius={16} className="flex flex-col flex-nowrap rounded-[16px]">
                <div>
                  <img className="w-full aspect-square object-cover  scale-105 grayscale group-hover:grayscale-0 transition-all" loading="lazy" src={video.image.url} alt="" />
                </div>
                <div className="bg-[#d4d4d420] p-[9%] pt-0">
                  <div className="relative z-40">
                    <HiPlay className="opacity-0" />
                  </div>
                  <h1 className="text-white font-bold c6 md:c3 rtl:text-end ">
                    {video.title[language as "ar" | "en"]}
                  </h1>
                  
                  <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2 rtl:text-end">
                    {video.description[language as "ar" | "en"]}
                  </p>
                </div>
                <IconButton  className='w-full bottom-0 mt-1 p-[6%]' text={t("actions")} direction={'left'}>
                    { 
                      clickedVideoId == video._id ?
                      <MdKeyboardArrowUp />
                      :
                      <MdKeyboardArrowDown />
                    }
                </IconButton> 
              </Squircle>
                {
                  clickedVideoId == video._id && 
                  <div className='absolute  rounded-[16px]  top-full w-full z-50 p-[6%]'>
                    <Squircle cornerRadius={16} className=' flex flex-col gap-3 bg-[#d4d4d48a]  items-stretch p-[6%]'>
                      <Squircle cornerRadius={16} 
                        onClick={()=>handleMenuActionClick(video,"edit")} 
                        className='text-center bg-w cursor-pointer p-[6%] bg-zinc-950'>{t("edit")}</Squircle>
                      <Squircle cornerRadius={16} 
                        onClick={() =>handleMenuActionClick(video,"play") }
                        className='text-center p-[6%] cursor-pointer bg-green-500'>{t("play")}</Squircle>
                      <Squircle cornerRadius={16} 
                        onClick={()=>handleMenuActionClick(video,"delete")}
                        className=' text-center p-[6%] cursor-pointer bg-red-500' >{t("delete")}</Squircle>
                    </Squircle>
                  </div>
                }
            </div>
          ))
        }
      </div>
      {
        videos&&videos.length > 8 ?
        <Pagination className='flex mt-[10%]  justify-center text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
        :
        <></>
      }
      <div className="h-[30vh]" />
    </div>
  </div>
  )
}

export default DashboardVideosPage


{/* <div className={` ${clickedVideoId == video._id ? "!top-1/2" : "group-hover:top-1/2" } 
  absolute left-1/2 -translate-x-1/2 translate-y-full top-full flex items-center gap-2 z-40 transition-all `}>
<div onClick={()=>handlePlayVideo(video)}  className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
  <RiEyeFill className='text-black' />
</div>
<div onClick={()=>handleDeleteVideo(video)} className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
  <MdDelete className='text-black'/>
</div>
<div
  onClick={()=>redirect(`Edit/${video._id}`,video)} 
  className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
  <TbEditCircle className='text-black'/>
</div>
</div> */}
