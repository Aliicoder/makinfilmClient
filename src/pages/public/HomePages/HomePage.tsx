import {lazy} from "react"
const Hero = lazy(()=>import("@/components/general/Hero"))
const BehindTheSince = lazy(()=>import("@/components/general/BehindTheSince"))
const RecentWork = lazy(()=>import("@/components/general/RecentWork"))
const Services = lazy(()=>import("@/components/general/Services"))
const ContactUs = lazy(()=>import("@/components/shared/ContactUs"))

function HomePage() { 

  return (
     <div className="relative overflow-x-hidden scroll-smooth">
      <Hero />
      <BehindTheSince />
      <RecentWork />
      <Services />
      <ContactUs />
     </div>
  )
}

export default HomePage