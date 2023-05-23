import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import DataProvider from './providers/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>,
)
