import { IoCaretBackOutline } from 'react-icons/io5'
import IconButton from '../buttons/IconButton'
import { IVideo } from '@/types/types'
import { useTranslation } from 'react-i18next'
import Fixed from '../styled/Fixed'
import FlexCol from '../styled/FlexCol'
import Text from '../styled/Text'
import RelativeGrid from '../styled/RelativeGrid'
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
      <Fixed className='top-0 left-0 z-[100] w-[100%] h-[100%] bg-black '>
        <RelativeGrid className='p-6 place-items-center w-lvw h-lvh text-white'>
          <IconButton onClick={()=>setPlayVideo(undefined)} className='fs-20 absolute top-10 left-10 flex items-center   '
            text={t("back")}  direction={`${language == "en" ? "left":"right"}`}>
            <IoCaretBackOutline />
          </IconButton>
          <FlexCol>
            <video controls autoPlay playsInline controlsList="nodownload" preload="metadata" >
              <source src={playVideo?.video.url} type="video/mp4" />
              <source src={playVideo?.video.url} type="video/webm"/>
            </video>
            <Text className='fs-20 p-3 m-3 font-semibold border-b border-slate-600'>{playVideo.title[language as "en" | "ar"]}</Text>
            <Text className='fs-16 p-3'>{playVideo.description[language as "en" | "ar"]}</Text>
          </FlexCol>
        </RelativeGrid>
      </Fixed>
    }
  </>
  )
}

export default VideoPlayer