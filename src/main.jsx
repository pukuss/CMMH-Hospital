import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Pages/Home.jsx'
import Addmition from './Components/Pages/Addmition.jsx'
import Academic from './Components/Pages/Academic.jsx'

import useGithubApi from './Components/Api/Github.js'




const router = createBrowserRouter([
  {path : "/",
    element : <Layout/>,
    
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "Addmition",
      element: <Addmition /> 
    },
    {
      path: "Academic",
      element: <Academic />
    }
  ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
