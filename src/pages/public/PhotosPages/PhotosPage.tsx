import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import ContactUs from '@/components/shared/ContactUs'
import usePhotosPagination from '@/hooks/usePhotosPagination'
function PhotosPage() {
  const {photos , counter , handleLeft , handleRight} = usePhotosPagination()
  return (
   <div className='container mt-[10%] mx-auto'>
    <div className=' h-full '>
      <div className="columns-2 md:columns-4">
        {
          photos&&photos.map((photo:any) =>(
            <div className="p-[6%]">
            <Squircle cornerRadius={16} className="border-transparent rounded-[16px]">
              <img className="w-full" src={photo.image.url} loading="lazy" alt="" />
            </Squircle>
          </div>
          ))
        }
      </div>
     {
      photos&&photos.length > 0 ?
       <Pagination className='flex mt-[10%] justify-center text-white' onLeftClick={handleLeft} onRightClick={handleRight} counter={counter} />
       :
       <></>
     }
      <ContactUs />
    </div>
  </div>

  )
}

export default PhotosPage