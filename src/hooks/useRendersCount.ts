import { useRef } from "react";

const useInitialRendersCounter = (componentName:string) => {
  if( import.meta.env.ENV === 'development' ){
    const initialRenderCount = useRef(0); 
    initialRenderCount.current += 1; 
    console.log(`* <${componentName}> renders count *`, initialRenderCount.current);
  }
}
export default useInitialRendersCounter