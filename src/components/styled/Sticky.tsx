import { PropsWithChildren, Ref } from 'react'
interface ISticky extends PropsWithChildren {
  ref?:Ref<HTMLDivElement>
  className: string
  onClick?: () => void
}
function Sticky({ref,className,children,onClick}:ISticky) {
  return (
    <div ref={ref} onClick={onClick} className={` ${className} sticky`}>
      {children}
    </div>
  )
}

export default Sticky