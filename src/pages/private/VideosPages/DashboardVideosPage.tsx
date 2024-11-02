import { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import useVideosPagination from '@/hooks/useVideosPagination'
import { HiPlay } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { MdDelete } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
import { TbEditCircle } from "react-icons/tb";
import useRedirect from '@/hooks/useRedirect'
import { IVideo } from '@/utils/types/types'
import { IoCloseSharp } from "react-icons/io5";
import DashboardMediaHeader from '@/components/general/DashboardMediaHeader'
import DeleteVideoPortal from '@/components/portals/DeleteVideoPortal'
function DashboardVideosPage() {
  const [,{language}] = useTranslation()
  const redirect = useRedirect()
  const {timeouter} = useSetTimeout()
  const [playVideo,setPlayVideo] = useState<IVideo|undefined>()
  const [searchValue,setSearchValue] = useState("")
  const {videos, counter , handleLeft , handleRight} = useVideosPagination(searchValue)
  const [videoToBeDeleted,setVideoToBeDeleted] = useState<IVideo|undefined>() 
  const [isDeleteVideo,setIsDeleteVideo] = useState<boolean>(false)
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   timeouter(()=>{
    if(searchValue !== value) 
      setSearchValue(value);
   },2000)
  },[searchValue])
  const handlePlayVideo = (video:IVideo)=>{
    setPlayVideo(video);
  }
  const handleDeleteVideo = (video:IVideo) =>{
    setIsDeleteVideo(true)
    setVideoToBeDeleted(video);
  }
  return (
   <div className=''>
    <DeleteVideoPortal condition={isDeleteVideo} video={videoToBeDeleted} setIsDeleteVideo={setIsDeleteVideo} />
    <DashboardMediaHeader url='video' onSearchChange={handleSearchChange} />
    {
      playVideo &&
      <div className='absolute top-0 left-0 bg-black  z-40 w-lvw h-lvh '>
        <div className='relative grid place-items-center w-lvw h-lvh'>
          <IoCloseSharp  className='cursor-pointer absolute top-10 right-10 c6 p-[2%] text-white z-50'/>
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
    <div className=' h-full '>
      <div
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="grid grid-cols-2 md:grid-cols-4">
        {
          videos&&videos.map((video:IVideo) =>(
            <Squircle  key={video._id} cornerRadius={16} className="group relative flex flex-col m-[6%] rounded-[16px] overflow-hidden">
              <div>
                <img className="w-full aspect-square object-cover  scale-105 grayscale group-hover:grayscale-0 transition-all" loading="lazy" src={video.image.url} alt="" />
              </div>
              <div className="bg-[#d4d4d420] p-[9%] pt-0">
                <div className="relative z-40">
                  {/* <div className="absolute top-0 right-0  flex justify-center items-center p-[5%] bg-white rounded-full">
                    <HiPlay className="c3 z m-[6%]]" />
                  </div> */}
                  <HiPlay className="opacity-0" />
                </div>
                <h1 className="text-white font-bold c6 md:c3 rtl:text-end ">
                  {video.title[language as "ar" | "en"]}
                </h1>
                <p className=" text-white mt-[4%] line-clamp-2 c4 md:c2 rtl:text-end">
                  {video.description[language as "ar" | "en"]}
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 translate-y-full top-full flex items-center gap-2 z-40 transition-all group-hover:top-1/2">
                <div  onClick={()=>handlePlayVideo(video)}  className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <RiEyeFill className='text-black' />
                </div>
                <div onClick={()=>handleDeleteVideo(video)} className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <MdDelete className='text-black'/>
                </div>
                <div
                  onClick={()=>redirect(`Edit/${video._id}`,video)} 
                  className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <TbEditCircle className='text-black'/>
                </div>
              </div>
            </Squircle>
          ))
        }
      </div>
      <Pagination className='flex mt-[10%] justify-center'  
        onLeftClick={handleLeft} onRightClick={handleRight} counter={counter} />
      <div className="h-[30vh]" />
    </div>
  </div>
  )
}

export default DashboardVideosPage

