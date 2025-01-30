import { motion , MotionProps } from 'framer-motion'
interface IContainer extends MotionProps {
  className?: string
}
function Container({className,children,...props}:IContainer) {
  return (
    <motion.div 
      className={` ${className} container`}
      {...props}
      >
      {children}
    </motion.div>
  )
}

export default Container