import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/i18n.ts'
import { BrowserRouter ,Route,Routes} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/index.ts'
import Contexts from './Context/Contexts.tsx'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Provider store={store}>
      <Contexts>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Suspense>
        <Toaster 
            toastOptions={{
              position:"top-right",
              className:"noOutline"
            }}
          />
      </Contexts>
      </Provider>
    </BrowserRouter>,
)
