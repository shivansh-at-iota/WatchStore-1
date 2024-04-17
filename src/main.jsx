import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Pre from './Pre'
import New from './New'
import Under from './Under'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route path='' element={<New />} />
      <Route path='pre' element={<Pre />} />
      <Route path='under' element={<Under />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
