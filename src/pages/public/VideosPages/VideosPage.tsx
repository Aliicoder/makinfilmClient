import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import useVideosPagination from '@/hooks/useVideosPagination'
import { useTranslation } from 'react-i18next'
import ContactUs from '@/components/shared/ContactUs'
import { HiPlay } from 'react-icons/hi2'
function DashboardVideosPage() {
  const [,{language}] = useTranslation()
  const {videos, counter , handleLeft , handleRight} = useVideosPagination()
  return (
    <div className='container mx-auto h-full mt-[10%] '>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {
          videos&&videos.map((video:any) =>(
            <Squircle  key={video._id} cornerRadius={16} className="flex flex-col m-[6%] rounded-[16px] overflow-hidden">
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
      {
        videos&&videos.length > 0 ?
        <Pagination className='flex mt-[10%]  justify-center text-white' onLeftClick={handleLeft} onRightClick={handleRight} counter={counter} />
        :
        <></>
      }
      <ContactUs />
    </div>
  )
}

export default DashboardVideosPage

