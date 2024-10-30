import { PropsWithChildren } from 'react'
import { Button } from "@/components/ui/button"
interface ButtonProps extends PropsWithChildren {
  text?:string
  type?: "submit" | "reset" | "button" | undefined
  disabled?:boolean
  direction: "left" | "right"
  className?:string
  onClick?:() => void
}
function IconButton({children,className,disabled=false,text,direction,type,onClick}:ButtonProps) {
  return (
      <Button type={type} disabled={disabled} className={`${className}  flex gap-2 cp-6 h-fit items-center`} onClick={onClick}>
          {direction == "left" && children}
          {text&&<span>{text}</span>}
          {direction == "right" && children}   
      </Button>
  )
}

export default IconButton