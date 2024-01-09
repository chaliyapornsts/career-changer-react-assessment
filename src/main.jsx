import React from 'react'
import ReactDOM from 'react-dom/client'
import Homenormal from '../Components/Homenormal';
import Owner from '../Components/Owner';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homenormal />
  },
  {
    path: "/Owner",
    element: <Owner />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
