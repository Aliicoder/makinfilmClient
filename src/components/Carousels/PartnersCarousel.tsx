import GEAIcon from '../customIcons/GEAIcon'
import AlinmaIcon from '../customIcons/AlinmaIcon'
import MOCIcon from '../customIcons/MOCIcon'

function PartnersCarousel() {
  return (
    <div className="flex partnersWrapper overflow-x-auto ">
      <div className=" basis-1/4 shrink-0 p-[6%] flex justify-center items-center">
        <GEAIcon />
      </div>
      <div className=" basis-1/4 shrink-0 p-[6%] flex justify-center items-center">
        <AlinmaIcon />
      </div>
      <div className=" basis-1/4 shrink-0 p-[6%] flex justify-center items-center">
        <MOCIcon />
      </div>  
      <div className=" basis-1/4 shrink-0 p-[6%] flex justify-center items-center">
        <MOCIcon />
      </div> 
      <div className=" basis-1/4 shrink-0 p-[6%] flex justify-center items-center">
        <MOCIcon />
      </div> 
    </div>
  )
}

export default PartnersCarousel