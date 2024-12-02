import { ICounter } from "@/utils/types/types";
import { useCallback, useEffect, useState } from "react"
import { useFetchVideosQuery , util } from "@/store/Reducers/videoApiSlice";
const perPage = 8 ;
const useVideosPagination = (searchValue:string = "") =>{
  const [counter,setCounter] = useState<ICounter>({prev:0,curPage:1,next:2,pagesLen:2});
  const {data:response} = useFetchVideosQuery({searchValue,perPage,curPage:counter.curPage})
  const handleLeft = useCallback(() =>{
    if(counter.prev > 0){
      setCounter( {...counter,prev:counter.prev-1,curPage:counter.curPage-1,next:counter.next-1})
      util.invalidateTags(["Videos"])
    }
  },[counter])
  const handleRight = useCallback( () =>{
    if(counter.next <= counter.pagesLen){
      setCounter({...counter,prev:counter.prev+1,curPage:counter.curPage+1,next:counter.next+1})
      util.invalidateTags(["Videos"])
    }
  },[counter])
  useEffect(()=>{
    if(response?.photos)
      setCounter({...counter,pagesLen:response.pagesLen})
  },[])
  return { videos:response?.videos , counter , handleLeft , handleRight}
}
export default useVideosPagination