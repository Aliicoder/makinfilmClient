import useSquircle from '@/hooks/useSquircle'
import { Squircle } from 'corner-smoothing'
import { MotionProps } from 'framer-motion';
import { HTMLProps, ReactNode } from 'react'
interface ISquircle extends MotionProps, Omit<HTMLProps<HTMLDivElement>, keyof MotionProps> {
  className?: string;
  children?: ReactNode;
}
function SquircleBorder({className,children}:ISquircle) {
  const cornerRadius = useSquircle()
  return (
    <Squircle cornerRadius={cornerRadius} className={className}>
      {children}
    </Squircle>
  )
}

export default SquircleBorder