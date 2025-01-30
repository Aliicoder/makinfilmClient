import { motion, MotionProps } from 'framer-motion';
import { HTMLProps, Ref } from 'react'
interface IFlexCol extends MotionProps, Omit<HTMLProps<HTMLDivElement>, keyof MotionProps> {
  ref?:Ref<HTMLDivElement>
  className?: string;
}
function FlexCol({ref,className,children}:IFlexCol) {
  return (
    <motion.div ref={ref} className={` flex flex-col ${className} `}>
      {children}
    </motion.div>
  )
}

export default FlexCol