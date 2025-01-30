import { Route, Routes } from "react-router-dom"
import { lazy } from "react"
import ProtectedRoutesMiddleware from "./components/middlewares/ProtectedRoutesMiddleware"
import RootLayout from "./pages/layouts/RootLayout"
import VideosLayout from "./pages/layouts/VideosLayout"
import DashboardLayout from "./pages/layouts/DashboardLayout"
import PublicLayout from "./pages/layouts/PublicLayout"
import PhotosLayout from "./pages/layouts/PhotosLayout"
import PhotosPage from "./pages/public/PhotosPage"
import VideosPage from "./pages/public/VideosPage"
import AboutUsPage from "./pages/public/AboutUsPage"
import HomePage from "./pages/public/HomePage"
import EquipmentsPage from "./pages/public/EquipmentsPage"


const PersistLoginMiddleware = lazy(()=>import("@/components/middlewares/PersistLoginMiddleware"))
const LogInPage = lazy(()=>import("@/pages/public/LogInPage"))
const DashboardVideosPage = lazy(()=>import("@/pages/private/VideosPages/DashboardVideosPage"))
const DashboardPhotosPage = lazy(()=>import("@/pages/private/PhotosPages/DashboardPhotosPage"))
const AddVideoPage = lazy(()=>import("@/pages/private/VideosPages/AddVideoPage"))
const AddPhotoPage = lazy(()=>import("@/pages/private/PhotosPages/AddPhotoPage"))
const NotFoundPage = lazy(()=>import("@/pages/public/NotFoundPage"))
const EditVideoPage = lazy(()=>import("@/pages/private/VideosPages/EditVideoPage"))
const EditPhotoPage = lazy(()=>import("./pages/private/PhotosPages/EditPhotoPage"))



function App() {
  return (
      <Routes  >
        <Route element={<RootLayout/>}>
          <Route element={<PersistLoginMiddleware/>}>
              <Route path="/login" element={<LogInPage/>} />
              <Route element={<ProtectedRoutesMiddleware/>}>
              <Route path="/dashboard" element={<DashboardLayout/>}>
                <Route path="videos" element={<VideosLayout/>}>
                  <Route index element={<DashboardVideosPage/>} />
                  <Route path="addVideo" element={<AddVideoPage/>} />
                  <Route path="Edit/:videoId" element={<EditVideoPage/>} />
                </Route>
                <Route path="photos" element={<PhotosLayout/>}>
                  <Route index element={<DashboardPhotosPage/>} />
                  <Route path="addPhoto" element={<AddPhotoPage/>} />
                  <Route path="Edit/:photoId" element={<EditPhotoPage/>} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="/" element={<PublicLayout/>} >  
            <Route index element={<HomePage/>} />
            <Route path="aboutUs" element={<AboutUsPage/>} />
            <Route path="videos" element={<VideosPage/>} />
            <Route path="photos" element={<PhotosPage/>} />
            <Route path="equipments" element={<EquipmentsPage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
  )
}

export default App
