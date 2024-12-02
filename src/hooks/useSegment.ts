import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useSegment = (segmentNo:number = 1 , track = true) =>{
  const  { pathname } = useLocation() ; //console.log(pathname)
  const [segments,setSegments] = useState<string[]>([])
  let urlSegments = pathname.split('/');
  useEffect(()=>{ //console.log(urlSegments)
     setSegments(urlSegments)
  },[track ? pathname : null])
  return  segments[segmentNo] 
}
export default useSegment