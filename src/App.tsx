import { Route, Routes, useLocation } from "react-router-dom"
import { lazy, Suspense } from "react"
import ProtectedRoutes from "./components/shared/ProtectedRoutes"
import { AnimatePresence } from "framer-motion"

const RootLayout = lazy(()=>import("@/components/layouts/RootLayout"))
const MainLayout = lazy(() =>import("@/components/layouts/MainLayout"))
const HomePage = lazy(()=>import("@/pages/public/HomePages/HomePage"))
const AboutUsPage = lazy(()=>import("@/pages/public/AboutUsPages/AboutUsPage"))
const LogInPage = lazy(()=>import("@/pages/public/LogInPage"))
const DashboardVideosPage = lazy(()=>import("@/pages/private/VideosPages/DashboardVideosPage"))
const DashboardPhotosPage = lazy(()=>import("@/pages/private/PhotosPages/DashboardPhotosPage"))
const DashboardLayout = lazy(()=>import("@/components/layouts/DashboardLayout"))
const DashboardPage = lazy(()=>import("@/pages/private/DashboardPages/DashboardPage"))
const AddVideoPage = lazy(()=>import("@/pages/private/VideosPages/AddVideoPage"))
const AddPhotoPage = lazy(()=>import("@/pages/private/PhotosPages/AddPhotoPage"))
const VideosPage = lazy(()=>import("@/pages/public/VideosPages/VideosPage"))
const PhotosPage = lazy(()=>import("@/pages/public/PhotosPages/PhotosPage"))
const NotFoundPage = lazy(()=>import("@/pages/public/NotFoundPage"))
const EditVideoPage = lazy(()=>import("@/pages/private/VideosPages/EditVideoPage"))
const EditPhotoPage = lazy(()=>import("./pages/private/PhotosPages/EditPhotoPage"))


function App() {
  const location = useLocation()
  return (
   <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout/>}>
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route element={<ProtectedRoutes/>}>
            <Route index element={<DashboardPage/>} />
            <Route path="videos" element={<DashboardVideosPage/>} />
            <Route path="videos/addVideo" element={<AddVideoPage/>} />
            <Route path="videos/Edit/:videoId" element={<EditVideoPage/>} />
            <Route path="photos" element={<DashboardPhotosPage/>} />
            <Route path="photos/addPhoto" element={<AddPhotoPage/>} />
            <Route path="photos/Edit/:photoId" element={<EditPhotoPage/>} />
          </Route>
        </Route>
          <Route path="/" element={<MainLayout/>} >  
            <Route index element={<Suspense> <HomePage/> </Suspense>} />
            <Route path="/login" element={<Suspense><LogInPage/></Suspense>} />
            <Route path="/aboutUs" element={<Suspense ><AboutUsPage/></Suspense>} />
            <Route path="/videos" element={<Suspense ><VideosPage/></Suspense>} />
            <Route path="/photos" element={<Suspense ><PhotosPage/></Suspense>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
   </AnimatePresence>
  )
}

export default App
