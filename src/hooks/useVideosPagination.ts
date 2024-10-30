import { ICounter, IQueryParams, IVideo } from "@/utils/types/types";
import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useFetchVideosMutation } from "@/store/Reducers/videoApiSlice";
const perPage = 8 ;
const useVideosPagination = (searchValue:string = "") =>{
  const [videos,setVideos] = useState<IVideo[]|undefined>()
  const [fetchVideosMutation] = useFetchVideosMutation()
  const [counter,setCounter] = useState<ICounter>({prev:0,curPage:1,next:2,pagesLen:2});
  const fetchVideosAndInitCounter = async ({searchValue,curPage,perPage}:IQueryParams) =>{
    try{
      const response = await fetchVideosMutation({searchValue,curPage,perPage}).unwrap();console.log("response >>",response)
     //toast.success(response.message)
      setVideos(response.videos)
      setCounter({...counter,pagesLen:response.pagesLen})
    }catch(error:any){ console.log("error >>",error)
      toast.error(error.message ?? "try again later")
    }
 }
 const fetchVideos = async ({searchValue,curPage,perPage}:IQueryParams) =>{
    try{
      const response = await fetchVideosMutation({searchValue,curPage,perPage}).unwrap();console.log("response >>",response)
      //toast.success(response.message)
      setVideos(response.videos)
    }catch(error:any){ //console.log("error >>",error)
      toast.error(error.message ?? "try again later")
    }
  }
  const handleLeft = useCallback(() =>{
    if(counter.prev > 0)
    setCounter((counter:ICounter)=>{ 
      fetchVideos({searchValue,curPage:counter.curPage-1,perPage})
      return {...counter,prev:counter.prev-1,curPage:counter.curPage-1,next:counter.next-1}
    })
  },[counter])
  const handleRight = useCallback( () =>{
    if(counter.next <= counter.pagesLen)
      setCounter((counter:ICounter)=>{
        fetchVideos({searchValue,curPage:counter.curPage+1,perPage})
        return {...counter,prev:counter.prev+1,curPage:counter.curPage+1,next:counter.next+1}
      })
  },[counter])
  useEffect(() =>{
    fetchVideosAndInitCounter({searchValue,curPage:counter.curPage,perPage})
  },[searchValue]);
  useEffect(() =>{
    console.log("counter >>" ,counter)
  },[counter]);
  return { videos , counter , handleLeft , handleRight}
}
export default useVideosPagination