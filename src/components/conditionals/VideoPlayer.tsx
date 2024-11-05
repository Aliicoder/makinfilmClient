import { IoCaretBackOutline } from 'react-icons/io5'
import IconButton from '../buttons/IconButton'
import { IVideo } from '@/utils/types/types'
import { useTranslation } from 'react-i18next'
interface VideoPlayer {
  playVideo?:IVideo 
  setPlayVideo:React.Dispatch<React.SetStateAction<IVideo|undefined>>
}
function VideoPlayer({playVideo,setPlayVideo}:VideoPlayer) {
  const [t,{language}] = useTranslation()
  return (
  <>
    {   
     playVideo &&
      <div className='fixed top-0 left-0 bg-black  z-50 w-[100%] h-[100%] '>
        <div className='relative grid place-items-center w-lvw h-lvh text-white'>
          <IconButton onClick={()=>setPlayVideo(undefined)} className='flex items-center c4 absolute top-10 left-10'
            text={t("back")}  direction={`${language == "en" ? "left":"right"}`}>
            <IoCaretBackOutline />
          </IconButton>
          <div className='flex flex-col'>
            <video controls autoPlay playsInline controlsList="nodownload" preload="metadata" >
              <source src={playVideo?.video.url} type="video/mp4" />
              <source src={playVideo?.video.url} type="video/webm"/>
            </video>
            <h1 className='c5 p-[5%] font-semibold'>{playVideo.title[language as "en" | "ar"]}</h1>
            <p className='c4 px-[5%]'>{playVideo.description[language as "en" | "ar"]}</p>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default VideoPlayer