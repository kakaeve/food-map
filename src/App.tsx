import React, { useState } from 'react'
import classes from './App.module.css'
import Login from '@/pages/Login/Login'
import RootPage from '@/pages/Root/RootPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootPage /> },
      { path: 'login', element: <Login /> },
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return <RouterProvider router={router} />
}

export default App
