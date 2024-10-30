import { ICounter, IPhoto, IQueryParams } from "@/utils/types/types";
import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useFetchPhotosMutation } from "@/store/Reducers/photosApiSlice";
const perPage = 8 ;
const usePhotosPagination = (searchValue:string = "") =>{
  const [photos,setPhotos] = useState<IPhoto[]|undefined>()
  const [fetchPhotosMutation] = useFetchPhotosMutation()
  const [counter,setCounter] = useState<ICounter>({prev:0,curPage:1,next:2,pagesLen:2});
  const fetchPhotosAndInitCounter = async ({searchValue,curPage,perPage}:IQueryParams) =>{
    try{
      const response = await fetchPhotosMutation({searchValue,curPage,perPage}).unwrap();console.log("response >>",response)
      //toast.success(response.message)
      setPhotos(response.photos)
      setCounter({...counter,pagesLen:response.pagesLen})
    }catch(error:any){ //console.log("error >>",error)
      toast.error(error.message ?? "try again later")
    }
 }
 const fetchPhotos = async ({searchValue,curPage,perPage}:IQueryParams) =>{
    try{
      const response = await fetchPhotosMutation({searchValue,curPage,perPage}).unwrap();console.log("response >>",response)
      //toast.success(response.message)
      setPhotos(response.photos)
    }catch(error:any){ //console.log("error >>",error)
      toast.error(error.message ?? "try again later")
    }
  }
  const handleLeft = useCallback(() =>{
    if(counter.prev > 0)
    setCounter((counter:ICounter)=>{ 
      fetchPhotos({searchValue,curPage:counter.curPage-1,perPage})
      return {...counter,prev:counter.prev-1,curPage:counter.curPage-1,next:counter.next-1}
    })
  },[counter])
  const handleRight = useCallback( () =>{
    if(counter.next <= counter.pagesLen)
      setCounter((counter:ICounter)=>{
        fetchPhotos({searchValue,curPage:counter.curPage+1,perPage})
        return {...counter,prev:counter.prev+1,curPage:counter.curPage+1,next:counter.next+1}
      })
  },[counter])
  useEffect(() =>{
    fetchPhotosAndInitCounter({searchValue,curPage:counter.curPage,perPage})
  },[]);
  return { photos , counter , handleLeft , handleRight}
}
export default usePhotosPagination