import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import ProtectedRoutesMiddleware from "./components/middlewares/ProtectedRoutesMiddleware"


const PersistLoginMiddleware = lazy(()=>import("@/components/middlewares/PersistLoginMiddleware"))
const PublicLayout = lazy(() =>import("@/components/layouts/PublicLayout"))
const HomePage = lazy(()=>import("@/pages/public/HomePages/HomePage"))
const AboutUsPage = lazy(()=>import("@/pages/public/AboutUsPages/AboutUsPage"))
const LogInPage = lazy(()=>import("@/pages/public/LogInPage"))
const DashboardVideosPage = lazy(()=>import("@/pages/private/VideosPages/DashboardVideosPage"))
const DashboardPhotosPage = lazy(()=>import("@/pages/private/PhotosPages/DashboardPhotosPage"))
const DashboardLayout = lazy(()=>import("@/components/layouts/DashboardLayout"))
const AddVideoPage = lazy(()=>import("@/pages/private/VideosPages/AddVideoPage"))
const AddPhotoPage = lazy(()=>import("@/pages/private/PhotosPages/AddPhotoPage"))
const VideosPage = lazy(()=>import("@/pages/public/VideosPages/VideosPage"))
const PhotosPage = lazy(()=>import("@/pages/public/PhotosPages/PhotosPage"))
const NotFoundPage = lazy(()=>import("@/pages/public/NotFoundPage"))
const EditVideoPage = lazy(()=>import("@/pages/private/VideosPages/EditVideoPage"))
const EditPhotoPage = lazy(()=>import("./pages/private/PhotosPages/EditPhotoPage"))
const VideosLayout = lazy(()=>import("@/components/layouts/VideosLayout"))
const PhotosLayout = lazy(()=>import("@/components/layouts/PhotosLayout"))
const RootLayout = lazy(()=>import("@/components/layouts/RootLayout"))


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
            <Route index element={<Suspense> <HomePage/> </Suspense>} />
            <Route path="aboutUs" element={<Suspense ><AboutUsPage/></Suspense>} />
            <Route path="videos" element={<Suspense ><VideosPage/></Suspense>} />
            <Route path="photos" element={<Suspense ><PhotosPage/></Suspense>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
  )
}

export default App
