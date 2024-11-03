import { useRef } from "react";

const useInitialRendersCounter = (componentName:string) => {
  if(process.env.NODE_ENV !== 'production'){
    const initialRenderCount = useRef(0); 
    initialRenderCount.current += 1; 
    console.log(`* <${componentName}> Initial renders count *`, initialRenderCount.current);
  }
}
export default useInitialRendersCounter