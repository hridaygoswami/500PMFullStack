// react imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

// main components
import About from './About.jsx'
import Contact from './Contact.jsx'
import Index from './Index.jsx'
import Shop from './Shop.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/shop",
    element: <Shop/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
