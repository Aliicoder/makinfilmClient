import { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import usePhotosPagination from '@/hooks/usePhotosPagination'
import { useTranslation } from 'react-i18next'
import { IPhoto } from '@/utils/types/types'
import DeletePhotoPortal from '@/components/portals/DeletePhotoPortal'
import IconButton from '@/components/buttons/IconButton'
import Masonry from 'react-masonry-css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import DashboardPhotosHeader from '@/components/dedicated/dashboardPhotosPage/DashboardPhotosHeader'
import PreviewPhoto from '@/components/shared/PreviewPhoto'
import { useNavigate } from 'react-router-dom'
import useInitialRendersCounter from '@/hooks/useRendersCount'
function DashboardPhotosPage() {
  useInitialRendersCounter("DashboardPhotosPage")
  const [clickedPhotoId, setClickedPhotoId] = useState("")
  const navigate = useNavigate()
  const [previewPhoto,setPreviewPhoto] = useState<IPhoto|undefined>()
  const {timeouter} = useSetTimeout()
  const [t,{language}] = useTranslation()
  const [searchValue,setSearchValue] = useState("")
  const [photoToBeDeleted,setPhotoToBeDeleted] = useState<IPhoto|undefined>() 
  const {photos, counter , handleLeft , handleRight } = usePhotosPagination(searchValue)
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

  const handleMenuActionClick = (photo:IPhoto,action:string) =>{
    switch(action) {
      case "edit": 
        navigate(`Edit/${photo._id}`,{state:photo})
        break
      case "view": 
      setPreviewPhoto(photo ? photo : undefined)
        break
      case "delete":
        setPhotoToBeDeleted(photo);
        break
    }
    setClickedPhotoId("")
  }
  return (
   <div>
    <DeletePhotoPortal  photo={photoToBeDeleted} setPhotoToBeDeleted={setPhotoToBeDeleted}  />
    <DashboardPhotosHeader onSearchChange={handleSearchChange} />
    <PreviewPhoto previewPhoto={previewPhoto} setPreviewPhoto={setPreviewPhoto} />
    <div className=' h-full '>
      <Masonry 
        breakpointCols={{
          default:4,
          640:2,
          768:4
        }}
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}
        className="my-masonry-grid">
        {
          photos && photos.map((photo:IPhoto) =>(
            <div onClick={()=>setClickedPhotoId(photo._id == clickedPhotoId ? "" : photo._id)}  key={photo._id} className="relative flex flex-col items-center p-[6%] ">
              <Squircle cornerRadius={16} className="flex flex-col flex-nowrap rounded-[16px]">
                <img className="w-full grayscale group-hover:grayscale-0 transition-all" src={photo.image.url} loading="lazy" alt="" />
                <IconButton  className='w-full bottom-0 mt-1 p-[6%]' text={t("actions")} direction={'left'}>
                  { 
                    clickedPhotoId == photo._id ?
                    <MdKeyboardArrowUp />
                    :
                    <MdKeyboardArrowDown />

                  }
                </IconButton>
              </Squircle> 
              {
                  clickedPhotoId == photo._id && 
                  <div className='absolute  rounded-[16px]  top-full w-full z-50 p-[6%]'>
                   <Squircle cornerRadius={16} className=' flex flex-col gap-3 bg-[#d4d4d48a]  items-stretch p-[6%]'>
                      <Squircle cornerRadius={16} 
                        onClick={()=>handleMenuActionClick(photo,"edit")} 
                        className='text-center bg-w cursor-pointer p-[6%] bg-zinc-950'>{t("edit")}</Squircle>
                      <Squircle cornerRadius={16} 
                        onClick={() =>handleMenuActionClick(photo,"view") }
                        className='text-center p-[6%] cursor-pointer bg-green-500'>{t("view")}</Squircle>
                      <Squircle cornerRadius={16} 
                        onClick={()=>handleMenuActionClick(photo,"delete")}
                        className=' text-center p-[6%] cursor-pointer bg-red-500' >{t("delete")}</Squircle>
                   </Squircle>
                  </div>
                }
          </div>
          ))
        }
      </Masonry>
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

