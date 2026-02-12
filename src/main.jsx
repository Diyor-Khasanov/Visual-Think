import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AuthFlow from './pages/AuthFlow.jsx'
import Protected from './router/Protected.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Details from './pages/Details.jsx'
import Settings from './pages/Settings.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <AuthFlow />
  },
  {
    path: '/project/:id',
    element: <Details />
  },
  {
    path: '/dashboard',
    element: (<Protected>
      <Dashboard />
    </Protected>)
  },
  {
    path: '/settings',
    element: (<Protected>
      <Settings />
    </Protected>)
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
