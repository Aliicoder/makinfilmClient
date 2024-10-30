import { PropsWithChildren } from 'react'
import LoaderProvider from './LoaderContext'
interface ThemeContext extends PropsWithChildren{}
function Contexts({children}:ThemeContext){
  return (
    <LoaderProvider>
      {children}
    </LoaderProvider>
  )
}

export default Contexts