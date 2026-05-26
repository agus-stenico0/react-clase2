import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@ionic/react/css/core.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './views/Home'
import { Write } from './routes/Write.jsx'
import { Blog } from './views/Blog.jsx'
import { Login } from './routes/Login.jsx'
import { Register } from './routes/Register.jsx'
import { DetailPost } from './views/DetailPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // layout principal
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'write',
        element: <Write />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',
        element: <DetailPost />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
