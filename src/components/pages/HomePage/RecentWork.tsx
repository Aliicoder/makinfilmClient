import { memo , useState } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import { HiPlay } from "react-icons/hi2";
import { Squircle } from "corner-smoothing"
import { IVideo } from "@/types/types";
import { useTranslation } from "react-i18next";
import useVideosPagination from "@/hooks/useVideosPagination";
import FlexRow from "@/components/styled/FlexRow";
import Text from "@/components/styled/Text";
import FlexColContainer from "@/components/styled/FlexColContainer";
import Grid from "@/components/styled/Grid";
import SquircleBorder from "@/components/borders/SquircleBorder";
import Frame from "@/components/styled/Frame";
import Relative from "@/components/styled/Relative";
import Absolute from "@/components/styled/Absolute";
import CustomButton from "@/components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/conditionals/VideoPlayer";

const RecentWork = memo(function RecentWork() {
  const navigate = useNavigate()
  const { videos } = useVideosPagination("")
  const [t,{language}] = useTranslation()
  const [playVideo,setPlayVideo] = useState<IVideo|undefined>()
  return (
    <FlexColContainer
      initial={{opacity:0}} 
      whileInView={{opacity:1 , animation: "ease"}} 
      >
     <FlexRow className="p-12">
        <Text className="z-10 fs-25 text-white bg-black font-semibold">
          {t("recentWork")}
        </Text>
      </FlexRow>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
      <Grid
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="grid-cols-2 my-[6%] md:grid-cols-4">
        { videos && videos.length > 0 ? 
          videos.map((video:IVideo,i:number) =>(
          <Frame
            onClick={()=>setPlayVideo(video)}
            key={video._id}
            initial={{  opacity: 0 , y: 60}}
            whileInView={{ opacity: 1 , y: 0 , animation: "ease" ,transition: {
              delay: i * 0.2
            }}}
            viewport={{ once: true}}
            >
            <SquircleBorder  
              className="flex flex-col m-[6%] rounded-[16px] overflow-hidden cursor-pointer">
            <Frame className="aspect-square overflow-hidden">
              <img className="w-full h-full  object-cover  scale-105 grayscale hover:grayscale-0 transition-all hover:scale-110" loading="lazy" src={video.image.url} alt="" />
            </Frame>
            <Frame className="bg-[#d4d4d420] p-4 pt-0">
              <Relative className="relative z-40">
                <HiPlay className="opacity-0" />
                <Absolute className="p-2 top-0 right-0 | flex justify-center items-center -translate-y-1/2
                    bg-white rounded-full rtl:right-auto rtl:left-0 ">
                  <HiPlay className=" z m-[6%]]" />
                </Absolute>
              </Relative>
              <Text className="fs-20 text-white font-bold line-clamp-1
                  rtl:text-end">
                {video.title[language as "ar" | "en"]}
              </Text>
              <Text className="fs-16 mt-4 line-clamp-1 text-white
                rtl:text-end">
                {video.description[language as "ar" | "en"]}
              </Text>
            </Frame>
          </SquircleBorder>
          </Frame>
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
      </Grid>
      <FlexRow className="p-6 justify-end font-normal 
        rtl:justify-start">
        <CustomButton 
          onClick={()=>navigate("/videos")}
          className="gap-2 p-3 py-2 flex items-center  border rounded-lg bg-white text-black"
          text={`${t("ViewMoreButton")}`}
          direction={"right"}
        >
          <FiArrowUpRight />
        </CustomButton>
      </FlexRow>
      
    </FlexColContainer>
  )
})

export default RecentWork