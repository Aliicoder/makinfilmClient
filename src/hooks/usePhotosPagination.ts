import { ICounter } from "@/utils/types/types";
import { useCallback, useEffect, useState } from "react"
import { useFetchPhotosQuery , util} from "@/store/Reducers/photosApiSlice";
const perPage = 8 ;
const usePhotosPagination = (searchValue:string = "") =>{
  const [counter,setCounter] = useState<ICounter>({prev:0,curPage:1,next:2,pagesLen:2});
  const {data:response} = useFetchPhotosQuery({searchValue,curPage:counter.curPage,perPage})
  const handleLeft = useCallback(() =>{
    if(counter.prev > 0){
      setCounter({...counter,prev:counter.prev-1,curPage:counter.curPage-1,next:counter.next-1})
      util.invalidateTags(["Photos"])
    }
  },[counter])
  const handleRight = useCallback( () =>{
    if(counter.next <= counter.pagesLen){
      setCounter({...counter,prev:counter.prev+1,curPage:counter.curPage+1,next:counter.next+1})
      util.invalidateTags(["Photos"])
    }
  },[counter])
  useEffect(()=>{
    if(response?.photos)
      setCounter({...counter,pagesLen:response.pagesLen})
  },[])
  return { photos:response?.photos , counter , handleLeft , handleRight}
}
export default usePhotosPagination