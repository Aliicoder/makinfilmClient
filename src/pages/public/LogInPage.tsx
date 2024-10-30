import { lazy } from "react"

const LogInForm = lazy(()=>import("@/components/forms/LogInForm"))
function LogInPage() {
  return (
    <div className='bg-black'>
      <LogInForm />
    </div>
  )
}

export default LogInPage