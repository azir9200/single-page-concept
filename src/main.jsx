import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'

const myCreateRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <div className="text-6xl" >Here is Home .</div>
      }
    ]

  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter} ></RouterProvider>
  </React.StrictMode>,
)
