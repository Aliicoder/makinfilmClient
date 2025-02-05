import { ICounter } from "@/types/types"
import { t } from "i18next"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Frame from "../styled/Frame"
import FlexRow from "../styled/FlexRow"

interface PaginationParams{
  className?: string
  onLeftClick:()=>void
  onRightClick:()=>void
  counter:ICounter
}
function Pagination({counter,onLeftClick,onRightClick,className}:PaginationParams) {
  console.log("counter",counter)
  return (
    <>
      { counter.pagesLen > 1 &&
      <Frame className={className}>
        <FlexRow className="gap-3 items-center rtl:flex-row-reverse">
          <FlexRow className="gap-1 items-center cursor-pointer rtl:flex-row-reverse " onClick={onLeftClick}>
            <FaAngleLeft /> 
            <div className="pb-1 font-semibold hover:underline">{t("pagination.previous")}</div>
          </FlexRow>
          <ul className="flex gap-3 rtl:flex-row-reverse">
            {counter.curPage <= 1 ?<li></li>:<li className="scale-75 transition-all">{counter.prev}</li>}
            <li className="font-semibold">{counter.curPage}</li>
            {counter.curPage >= counter.pagesLen?<li></li>:<li className="scale-75 transition-all">{counter.next}</li> }
          </ul>
          <FlexRow className="gap-1 px-3 py-2 items-center  bg-white text-black rounded-md  rtl:flex-row-reverse cursor-pointer" onClick={onRightClick}>
            <div className="pb-1 font-semibold hover:underline">{t("pagination.next")}</div> 
            <FaAngleRight />
          </FlexRow>
        </FlexRow>
      </Frame>
      }
    </>
  )
}

export default Pagination