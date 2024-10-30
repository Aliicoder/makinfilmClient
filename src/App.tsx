import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import ProtectedRoutes from "./components/shared/ProtectedRoutes"

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


function App() {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/login" element={<LogInPage/>} />
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route element={<ProtectedRoutes/>}>
          <Route index element={<DashboardPage/>} />
          <Route path="videos" element={<DashboardVideosPage/>} />
          <Route path="videos/addVideo" element={<AddVideoPage/>} />
          <Route path="videos/Edit/:videoId" element={<EditVideoPage/>} />
          <Route path="photos" element={<DashboardPhotosPage/>} />
          <Route path="photos/addPhoto" element={<AddPhotoPage/>} />
        </Route>
      </Route>
        <Route path="/" element={<MainLayout/>} >  
          <Route index element={<HomePage/>} />
          <Route path="/aboutUs" element={<AboutUsPage/>} />
          <Route path="/videos" element={<VideosPage/>} />
          <Route path="/photos" element={<PhotosPage/>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App
