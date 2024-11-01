import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import ContactUs from '@/components/shared/ContactUs'
import usePhotosPagination from '@/hooks/usePhotosPagination'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IPhoto } from '@/utils/types/types'
function PhotosPage() {
  const [selectedImage,setSelectedImage] = useState<string|undefined>()
  const {photos , counter , handleLeft , handleRight} = usePhotosPagination()
  const scrollTopAndLeft = () =>{
    window.scrollTo({top:0})
    handleLeft()
  }
  const scrollTopAndRight = () =>{
    window.scrollTo({top:0})
    handleRight()
  }
  const handleIsExpanded = (image:string) =>{
    setSelectedImage(image ? image : undefined)
  }
  return (
   <motion.div 
    initial={{opacity:0}} 
    whileInView={{opacity:1 , animation: "ease"}} 
    exit={{opacity:0 , transition:{
      duration: 0.2
    }}}
     className='container mt-[10%] mx-auto'>
    <div className=' h-full '>
      <div className="columns-2 md:columns-4">
        {
          photos&&photos.map((photo:IPhoto,i) =>(
          <motion.div 
            onClick={()=>handleIsExpanded(photo.image.url)}
            initial={{ scale : 0.5, opacity: 0 , y: 60}}
            whileInView={{ scale : 1 , opacity: 1 , y: 0 , animation: "ease" ,transition: {
              delay: i * 0.2
            }}}
            viewport={{ once: true}}
            className="p-[6%]">
            <Squircle cornerRadius={16} className="border-transparent rounded-[16px]">
              <img className="w-full" src={photo.image.url} loading="lazy" alt="" />
            </Squircle>
          </motion.div>
          ))
        }
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={()=>handleIsExpanded("")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 ,animation:"ease" }}
        >
          <motion.img
            initial={{ scale: 0.5 ,animation:"ease" }}
            animate={{ scale: 1 , animation:"ease" ,transition:{
              bounce: true
            }}}
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </motion.div>
      )}
     {
      photos&&photos.length > 0 ?
       <Pagination className='flex mt-[10%] justify-center text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
       :
       <></>
     }
      <ContactUs />
    </div>
  </motion.div>

  )
}

export default PhotosPage