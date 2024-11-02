import { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import usePhotosPagination from '@/hooks/usePhotosPagination'
import DashboardMediaHeader from '@/components/general/DashboardMediaHeader'
import { useTranslation } from 'react-i18next'
import { RiEyeFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { TbEditCircle } from 'react-icons/tb'
import useRedirect from '@/hooks/useRedirect'
import { IPhoto } from '@/utils/types/types'
import DeletePhotoPortal from '@/components/portals/DeletePhotoPortal'
function DashboardPhotosPage() {
  const redirect = useRedirect()
  const {timeouter} = useSetTimeout()
  const [,{language}] = useTranslation()
  const [searchValue,setSearchValue] = useState("")
  const [photoToBeDeleted,setPhotoToBeDeleted] = useState<IPhoto|undefined>() 
  const [isDeletePhoto,setIsDeletePhoto] = useState<boolean>(false)
  const {photos, counter , handleLeft , handleRight} = usePhotosPagination(searchValue)
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   timeouter(()=>{
    if(searchValue !== value) 
      setSearchValue(value);
   },2000)
  },[searchValue])
  const handleDeletePhoto = (photo:IPhoto) =>{
    setIsDeletePhoto(true)
    setPhotoToBeDeleted(photo);
  }
  return (
   <div>
    <DeletePhotoPortal condition={isDeletePhoto} photo={photoToBeDeleted} setIsDeletePhoto={setIsDeletePhoto} />
    <DashboardMediaHeader url='photo' onSearchChange={handleSearchChange} />
    <div className=' h-full '>
      <div 
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="columns-2 md:columns-4 ltr:columns-">
        {
          photos&&photos.map((photo:IPhoto) =>(
            <div onClick={()=>handleDeletePhoto(photo)} key={photo._id} className="group relative p-[6%] overflow-hidden">
            <Squircle cornerRadius={16} className="group border-transparent rounded-[16px]">
              <img className="w-full grayscale group-hover:grayscale-0 transition-all" src={photo.image.url} loading="lazy" alt="" />
            </Squircle>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-full top-full flex items-center gap-2 z-40 transition-all group-hover:top-1/2">
                <div   className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <RiEyeFill className='text-black' />
                </div>
                <div  className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <MdDelete className='text-black'/>
                </div>
                <div
                  onClick={()=>redirect(`Edit/${photo._id}`,photo)} 
                  className="flex justify-center items-center bg-white rounded-full cp-6 cursor-pointer">
                  <TbEditCircle className='text-black'/>
                </div>
              </div>
          </div>
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

export default DashboardPhotosPage