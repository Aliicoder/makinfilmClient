import { ICounter } from "@/utils/types/types"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

interface PaginationParams{
  className?: string
  onLeftClick:()=>void
  onRightClick:()=>void
  counter:ICounter
}
function Pagination({counter,onLeftClick,onRightClick,className}:PaginationParams) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
          <div className="cursor-pointer flex items-center gap-1" onClick={onLeftClick}>
            <FaAngleLeft /> <div className="pb-1 font-semibold hover:underline">Previous</div>
          </div>
          <ul className="flex gap-3">
            {counter.curPage <= 1 ?<li></li>:<li className="scale-75 transition-all">{counter.prev}</li>}
            <li className="font-semibold">{counter.curPage}</li>
            {counter.curPage >= counter.pagesLen?<li></li>:<li className="scale-75 transition-all">{counter.next}</li> }
          </ul>
          <div className="cursor-pointer flex items-center gap-1" onClick={onRightClick}>
            <div className="pb-1 font-semibold hover:underline">Next</div><FaAngleRight />
          </div>
      </div>
    </div>
  )
}

export default Pagination