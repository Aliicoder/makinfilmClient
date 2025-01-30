import { motion, MotionProps } from 'framer-motion';
import{ HTMLProps } from 'react'
interface IGrid extends MotionProps, Omit<HTMLProps<HTMLDivElement>, keyof MotionProps> {
  className?: string;
}
function Grid({className,children}:IGrid) {
  return (
    <motion.div className={` ${className} grid`}>
      {children}
    </motion.div>
  )
}

export default Grid