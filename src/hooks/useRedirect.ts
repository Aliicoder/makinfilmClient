import { useNavigate } from "react-router-dom"

const useRedirect = () => {
  const navigate = useNavigate()
  const redirect = (path:string,state:object|null = null) =>{
    if(state){
      navigate(path,{state})
    } else

    navigate(path)
  }
  return redirect
}
export default useRedirect