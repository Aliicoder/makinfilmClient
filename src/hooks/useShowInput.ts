import { useState } from "react"

const useShowInput = () =>{
  const [status,setStatus] = useState(false)
  const showInput = (status:boolean) =>{
    if(status == true)
      return setStatus(true)
    setStatus(false)
  }
  return { status , showInput }
}

export default useShowInput