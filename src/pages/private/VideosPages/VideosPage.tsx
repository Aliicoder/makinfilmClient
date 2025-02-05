import React, { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import useVideosPagination from '@/hooks/useVideosPagination'
import { useTranslation } from 'react-i18next'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IVideo } from '@/types/types'
import DeleteVideoPortal from '@/components/portals/DeleteVideoPortal'
import VideoPlayer from '@/components/conditionals/VideoPlayer'
import IconButton from '@/components/buttons/IconButton'
import { useNavigate } from 'react-router-dom'
import useInitialRendersCounter from '@/hooks/useRendersCount'
import FlexCol from '@/components/styled/FlexCol'
import Grid from '@/components/styled/Grid'
import VideosHeader from '@/components/pages/dashboardVideosPage/VideosHeader'
import FlexRow from '@/components/styled/FlexRow'
import Block from '@/components/styled/Block'
import SquircleBorder from '@/components/borders/SquircleBorder'
import Frame from '@/components/styled/Frame'
import RelativeFlexCol from '@/components/styled/RelativeFlexCol'
import Text from '@/components/styled/Text'
import Absolute from '@/components/styled/Absolute'
interface IVideosPage {
  className?: string
}
function VideosPage({className}:IVideosPage) {
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
  const handleOpenMenu = (video:IVideo,e:React.MouseEvent) =>{
    e.stopPropagation()
    setClickedVideoId( clickedVideoId == video._id ? "" : video._id)
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
  }
  return (
  <FlexCol className={`${className}`}>
    <VideosHeader onSearchChange={handleSearchChange} />
    <Grid
      style={{ direction: language == "ar" ? "ltr" : "ltr"}}
      className="grid  gap-0 grid-cols-2 md:grid-cols-4 ">
      {
        videos&&videos.map((video:IVideo) =>(
          <RelativeFlexCol
            onClick={(e)=>handleOpenMenu(video,e)} 
            key={video._id} 
            className="p-3 items-center" >
            <SquircleBorder 
              className="flex flex-col flex-nowrap ">
              <Frame>
                <img 
                  className="w-full aspect-square object-cover  scale-105 grayscale group-hover:grayscale-0 transition-all" 
                  src={video.image.url} 
                  alt="" />
              </Frame>
              <FlexCol className="p-6  bg-[#d4d4d420] ">
                <Text className="fs-16 text-white font-bold 
                  rtl:text-end">
                  {video.title[language as "ar" | "en"]}
                </Text>
                <Text className=" text-white mt-[4% line-clamp-1 c4 
                  rtl:text-end">
                  {video.description[language as "ar" | "en"]}
                </Text>
              </FlexCol>
              <IconButton  
                className='w-full bottom-0 mt-1 p-[6%]' text={t("actions")} direction={'left'}>
                  { 
                    clickedVideoId == video._id ?
                    <MdKeyboardArrowUp />
                    :
                    <MdKeyboardArrowDown />
                  }
              </IconButton> 
            </SquircleBorder>
            { clickedVideoId == video._id && 
            <Absolute className='z-[100] p-6 top-full w-full rounded-lg '>
              <SquircleBorder className='gap-3 p-6 flex flex-col items-stretch text-white bg-[#d4d4d420]'>
                <SquircleBorder
                  onClick={()=>handleMenuActionClick(video,"edit")} 
                  className='p-3 text-center cursor-pointer  bg-zinc-950 '>{t("edit")}</SquircleBorder>
                <SquircleBorder 
                  onClick={() =>handleMenuActionClick(video,"play") }
                  className='p-3 text-center cursor-pointer bg-green-500'>{t("play")}</SquircleBorder>
                <SquircleBorder
                  onClick={()=>handleMenuActionClick(video,"delete")}
                  className='p-3 text-center cursor-pointer bg-red-500' >{t("delete")}</SquircleBorder>
              </SquircleBorder>
            </Absolute>
            }
          </RelativeFlexCol>
        ))
      }
    </Grid>
    <FlexRow className="mt-10 justify-center ">
      <Pagination className='text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
    </FlexRow>
    <Block className="h-[30vh]" />
    <DeleteVideoPortal videoToBeDeleted={videoToBeDeleted} setVideoToBeDeleted={setVideoToBeDeleted} />
    <VideoPlayer setPlayVideo={setPlayVideo} playVideo={playVideo} />
  </FlexCol>
  )
}

export default VideosPage


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
