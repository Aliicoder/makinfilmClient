import { useCallback, useState } from 'react'
import DashboardPhotosHeader from '@/components/general/DashboardPhotosHeader'
import useSetTimeout from '@/hooks/useSetTimeout'
import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import usePhotosPagination from '@/hooks/usePhotosPagination'
function DashboardPhotosPage() {
  const {timeouter} = useSetTimeout()
  const [searchValue,setSearchValue] = useState("")
  const {photos, counter , handleLeft , handleRight} = usePhotosPagination(searchValue)
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   timeouter(()=>{
    if(searchValue !== value) 
      setSearchValue(value);
   },2000)
  },[searchValue])
  return (
   <div>
    <DashboardPhotosHeader onSearchChange={handleSearchChange} />
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
      <Pagination className='flex mt-[10%] justify-center'  
        onLeftClick={handleLeft} onRightClick={handleRight} counter={counter} />
      <div className="h-[30vh]" />
    </div>
  </div>
  )
}

export default DashboardPhotosPage