import Pagination from '@/components/shared/Pagination'
import { Squircle } from 'corner-smoothing'
import ContactUs from '@/components/shared/ContactUs'
import usePhotosPagination from '@/hooks/usePhotosPagination'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IPhoto } from '@/utils/types/types'
import { useTranslation } from 'react-i18next'
import Masonry from 'react-masonry-css'
import useInitialRendersCounter from '@/hooks/useRendersCount'
import PreviewImage from '@/components/shared/PreviewImage'
function PhotosPage() { useInitialRendersCounter("PhotosPage")
  const [,{language}] = useTranslation()
  const [selectedImage,setSelectedImage] = useState<string|undefined>()
  const { photos , counter , handleLeft , handleRight} = usePhotosPagination()
  const scrollTopAndLeft = () =>{
    window.scrollTo({top:0})
    handleLeft()
  }
  const scrollTopAndRight = () =>{
    window.scrollTo({top:0})
    handleRight()
  }
  const handleExpand = (image:string) =>{
    setSelectedImage(image ? image : undefined)
  }
  useEffect(() =>{
    console.log(photos)
  },[photos])
  return (
   <motion.div 
    initial={{opacity:0}} 
    whileInView={{opacity:1}} 
    exit={{opacity:0 , transition:{
      duration: 0.2 , when:"beforeChildren"
    }}}
     className='container mt-[10%] mx-auto'>
    <PreviewImage selectedImage={selectedImage} handleExpand={handleExpand} />
    <div className=' h-full '>
    <Masonry
        breakpointCols={{
          default:4,
          640:2,
          768:4
        }}
        className="my-masonry-grid"
        style={{ direction: language == "ar" ? "ltr" : "ltr"}}>
        {photos&&photos.length > 0 ?
          photos.map((photo:IPhoto, i) => (
          <motion.div
            key={photo._id} 
            initial={{  opacity: 0, y: 60 }}
            whileInView={{ opacity: 1 , y: 0 , transition: 
              { type : "tween" , delay: 0.5 * i , duration: 0.5 , ease: "easeInOut"},
            }}
            layout
            viewport={{ once: true }}
            className="p-[6%]"
            onClick={() => handleExpand(photo.image.url)}
          >
            <Squircle cornerRadius={16} className="border-transparent rounded-[16px]">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transition-all"
                src={photo.image.url}
                loading="lazy"
                alt=""
              />
            </Squircle>
          </motion.div>
        ))
        :
        <div
            className="p-[6%]"
          >
            <Squircle cornerRadius={16} className="border-transparent rounded-[16px] animate-pulse">
              <img
                className="w-full h-full object-cover"
                src={"placeholder/placeholder1.jpg"}
                loading="lazy"
                alt=""
              />
            </Squircle>
          </div>
      }
      </Masonry>
      <Pagination className='flex mt-[10%] justify-center text-white' onLeftClick={scrollTopAndLeft} onRightClick={scrollTopAndRight} counter={counter} />
      <ContactUs />
    </div>
  </motion.div>

  )
}

export default PhotosPage