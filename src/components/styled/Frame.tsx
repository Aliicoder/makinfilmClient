import { motion, MotionProps } from 'framer-motion'
import { HTMLProps } from 'react'
interface IFrame extends MotionProps, Omit<HTMLProps<HTMLDivElement>, keyof MotionProps> {
  className?: string;
}
function Frame({className,children,...props}:IFrame) {
  return (
    <motion.div className={` ${className}`} {...props}>
      {children}
    </motion.div>
  )
}

export default Frame