import { useCallback, useState } from 'react'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import usePhotosPagination from '@/hooks/usePhotosPagination'
import { useTranslation } from 'react-i18next'
import { IPhoto } from '@/types/types'
import DeletePhotoPortal from '@/components/portals/DeletePhotoPortal'
import IconButton from '@/components/buttons/IconButton'
import Masonry from 'react-masonry-css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import PreviewPhoto from '@/components/shared/PreviewPhoto'
import { useNavigate } from 'react-router-dom'
import useInitialRendersCounter from '@/hooks/useRendersCount'
import FlexCol from '@/components/styled/FlexCol'
import PhotosHeader from '@/components/pages/dashboardPhotosPage/PhotosHeader'
import FlexRow from '@/components/styled/FlexRow'
import Block from '@/components/styled/Block'
import RelativeFlexCol from '@/components/styled/RelativeFlexCol'
import SquircleBorder from '@/components/borders/SquircleBorder'
import Absolute from '@/components/styled/Absolute'
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
    console.log("clicked")
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
   <FlexCol>
    <PhotosHeader onSearchChange={handleSearchChange} />
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
            <RelativeFlexCol onClick={()=>setClickedPhotoId(photo._id == clickedPhotoId ? "" : photo._id)}  
              key={photo._id} className="p-3 items-center">
              <SquircleBorder className="flex flex-col flex-nowrap rounded-[16px]">
                <img className="w-full grayscale group-hover:grayscale-0 transition-all" src={photo.image.url} loading="lazy" alt="" />
                <IconButton  className='w-full bottom-0 mt-1 p-[6%]' text={t("actions")} direction={'left'}>
                  { 
                    clickedPhotoId == photo._id ?
                    <MdKeyboardArrowUp />
                    :
                    <MdKeyboardArrowDown />

                  }
                </IconButton>
              </SquircleBorder> 
              { clickedPhotoId == photo._id && 
              <Absolute className='z-50 p-6 top-full w-full rounded-lg'>
                <SquircleBorder className='gap-3 p-6 flex flex-col items-stretch  text-white bg-[#d4d4d420]'>
                  <SquircleBorder 
                    onClick={()=>handleMenuActionClick(photo,"edit")} 
                    className='p-3 text-center cursor-pointer bg-zinc-950'>{t("edit")}</SquircleBorder>
                  <SquircleBorder
                    onClick={() =>handleMenuActionClick(photo,"view") }
                    className='p-3 text-center cursor-pointer bg-green-500'>{t("view")}</SquircleBorder>
                  <SquircleBorder 
                    onClick={()=>handleMenuActionClick(photo,"delete")}
                    className='p-3 text-center cursor-pointer bg-red-500' >{t("delete")}</SquircleBorder>
                </SquircleBorder>
              </Absolute>
              }
          </RelativeFlexCol>
          ))
        }
      </Masonry>
      <FlexRow className='justify-center'>
        <Pagination className='text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
      </FlexRow>
      <Block className="h-[30vh]" />
      <DeletePhotoPortal  photo={photoToBeDeleted} setPhotoToBeDeleted={setPhotoToBeDeleted}  />
      <PreviewPhoto previewPhoto={previewPhoto} setPreviewPhoto={setPreviewPhoto} />
    </FlexCol>
  )
}

export default DashboardPhotosPage

