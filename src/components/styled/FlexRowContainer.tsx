import { motion, MotionProps } from 'framer-motion';
import { HTMLProps , ReactNode } from 'react'
interface IFlexRowContainer extends MotionProps, Omit<HTMLProps<HTMLDivElement>, keyof MotionProps> {
  className?: string;
  children?: ReactNode;
}
function FlexRowContainer({className,children}:IFlexRowContainer) {
  return (
    <motion.div className={` ${className} mx-auto container flex flex-row `}>
      {children}
    </motion.div>
  )
}

export default FlexRowContainer