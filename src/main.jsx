import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routeHandler from './routeHandler';

// universal css files
// I can access this rules in every Component
import "./css/universal_css.css"




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routeHandler} />
  </React.StrictMode>
);