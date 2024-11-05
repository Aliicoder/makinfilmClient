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
import PreviewImage from '@/components/shared/PreviewImage'
function DashboardPhotosPage() {
  const redirect = useRedirect()
  const [clickedImageId, setClickedImageId] = useState("")
  const [selectedImage,setSelectedImage] = useState<string|undefined>()
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
  const handleExpand = (image:string) =>{
    setSelectedImage(image ? image : undefined)
  }
  const handleImageClick = (photoId:string) =>{
    setClickedImageId(prev => prev === photoId ? "" : photoId)
  }
  const scrollTopAndLeft = () =>{
    window.scrollTo({top:0})
    handleLeft()
  }
  const scrollTopAndRight = () =>{
    window.scrollTo({top:0})
    handleRight()
  }
  return (
   <div>
    <DeletePhotoPortal condition={isDeletePhoto} photo={photoToBeDeleted} setIsDeletePhoto={setIsDeletePhoto} />
    <DashboardMediaHeader url='photo' onSearchChange={handleSearchChange} />
    <PreviewImage selectedImage={selectedImage} handleExpand={handleExpand} />
    <div className=' h-full '>
      <div 
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="columns-2 gap-0 md:columns-4 ltr:columns-">
        {
          photos&&photos.map((photo:IPhoto) =>(
            <div key={photo._id} onClick={()=>handleImageClick(photo._id)}  className="group relative p-[6%] overflow-hidden">
              <Squircle cornerRadius={16} className="group border-transparent rounded-[16px]">
                <img className="w-full grayscale group-hover:grayscale-0 transition-all" src={photo.image.url} loading="lazy" alt="" />
              </Squircle>
            <div className={` ${clickedImageId == photo._id ? "!top-1/2" : "group-hover:top-1/2" } 
                absolute left-1/2 -translate-x-1/2 translate-y-full top-full flex items-center gap-2 z-40 transition-all `}>
                <div onClick={() => handleExpand(photo.image.url)} className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
                  <RiEyeFill className='text-black' />
                </div>
                <div onClick={()=>handleDeletePhoto(photo)} className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
                  <MdDelete className='text-black'/>
                </div>
                <div
                  onClick={()=>redirect(`Edit/${photo._id}`,photo)} 
                  className="flex justify-center items-center bg-white rounded-full p-[6%] cursor-pointer">
                  <TbEditCircle className='text-black'/>
                </div>
              </div>
          </div>
          ))
        }
      </div>
      {
        photos&&photos.length > 8 ?
        <Pagination className='flex mt-[10%]  justify-center text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
        :
        <></>
      }
      <div className="h-[30vh]" />
    </div>
  </div>
  )
}

export default DashboardPhotosPage