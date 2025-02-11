import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Router.jsx'
import Auth_provider from './Provider/Auth_provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth_provider>
    <RouterProvider router={router}></RouterProvider>
    </Auth_provider>
  </StrictMode>,
)
