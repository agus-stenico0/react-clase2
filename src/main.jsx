import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '@ionic/react/css/core.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './views/Home'
import { Write } from './views/Write.jsx'
import { Blog } from './views/Blog.jsx'
import { Login } from './views/Login.jsx'
import { Register } from './views/Register.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/write',
    element: <Write />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
