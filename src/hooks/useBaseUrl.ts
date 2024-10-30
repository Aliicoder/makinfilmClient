import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useBaseUrl = () =>{
  const  { pathname } = useLocation()
  const [baseUrl,setBaseUrl] = useState("/")
  useEffect(() =>{ console.log(pathname)
    const base = pathname.split('/')[1]; //console.log("base >>",base)
    setBaseUrl(base)
  },[pathname])
  return { baseUrl }
}
export default useBaseUrl