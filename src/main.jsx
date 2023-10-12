import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./component/index"
import StoriesPage from "./component/storiesPage"

// universal css
// I can access this rules in every Component
import "../public/css/cssComponent/universal_css.css"



const router = createBrowserRouter ( [
  {
    path: "/",
    element: <Homepage/>,
  },
  
  {
    path: "/allStories",
    element : <StoriesPage />
  }

] );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
