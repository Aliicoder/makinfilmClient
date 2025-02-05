import Hero from "@/components/pages/HomePage/Hero"
import useInitialRendersCounter from "@/hooks/useRendersCount"
import {lazy, memo } from "react"
const BehindTheSince = lazy(()=>import("@/components/pages/HomePage/BehindTheSince"))
const RecentWork = lazy(()=>import("@/components/pages/HomePage/RecentWork"))
const Services = lazy(()=>import("@/components/pages/HomePage/Services"))
const HomePage = memo(function HomePage() {  
  useInitialRendersCounter("HomePage")
  return (
     <>
      <Hero />
      <BehindTheSince />
      <RecentWork />
      <Services />
     </>
  )
})

export default HomePage