import GEAIcon from '../customIcons/GEAIcon'
import MOCIcon from '../customIcons/MOCIcon'
import Accenture from '../customIcons/Accenture'
import Tawuniya from '../customIcons/Tawuniya'

function PartnersCarousel() {

  return (
    <div  className="relative flex  overflow-x-auto   pointer-events-none">
      <div  className='relative partnersWrapper flex w-full h-full'>
        <div className=" basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
         <GEAIcon/>
        </div> 
        <div className="basis-1/4    p-[5%] shrink-0 flex justify-center items-center">
          <MOCIcon/>
        </div>
        <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
         <Accenture/>
        </div>
        <div className="basis-1/4    p-[5%] shrink-0 flex justify-center items-center">
        <Tawuniya />
        </div>    
        <div  className={`absolute flex w-full -right-full  h-full pointer-events-none`}>
          <div className=" basis-1/4  p-[5%] shrink-0  flex justify-center items-center">
          <GEAIcon/>
          </div> 
          <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
            <MOCIcon/>
          </div>
          <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
          <Accenture/>
          </div>
          <div className=" basis-1/4   p-[5%] shrink-0 flex justify-center items-center">
          <Tawuniya />
          </div>
        </div>
     </div>
    
    </div>
  )
}

export default PartnersCarousel;




// if(refParent.current?.clientWidth){
//   const width = refParent?.current?.clientWidth ;console.log("width 1% >>",width);
//   const width1per = width * 0.01;console.log("width 1% >>",width1per);
//   let totalScrolledWidth = 0
//   timeoutRef.current = setInterval(()=>{
//     if(totalScrolledWidth < width){
//       totalScrolledWidth+=width1per;console.log("total scrolled width >>",totalScrolledWidth);
//       refParent.current?.scrollTo({left:totalScrolledWidth,behavior:"smooth"})
//     }else
//       console.log("larger");
    
   
//   },300) 
// }
// return () => {
//   if (timeoutRef.current) {
//     clearInterval(timeoutRef.current);
//   }
// };


// <div  className="relative flex  overflow-x-auto wrapperr  pointer-events-none">
// <div ref={refParent} className='relative partnersWrapper flex w-full h-full'>
//   <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0  flex justify-center items-center">
//    <GEAIcon/>
//   </div> 
//   <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//     <MOCIcon/>
//   </div>
//   <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//    <Accenture/>
//   </div>
//   <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//   <Tawuniya />
//   </div>    
//   <div
//     style={{left:refParent?.current?.scrollWidth}} 
//     className={`absolute flex bg-yellow-50 partnersWrapperFollower w-full  h-full pointer-events-none`}>
//     <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0  flex justify-center items-center">
//     <GEAIcon/>
//     </div> 
//     <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//       <MOCIcon/>
//     </div>
//     <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//     <Accenture/>
//     </div>
//     <div ref={refChild} className=" basis-1/2 md:basis-1/4 p-[5%] shrink-0 flex justify-center items-center">
//     <Tawuniya />
//     </div>
//   </div>
// </div>