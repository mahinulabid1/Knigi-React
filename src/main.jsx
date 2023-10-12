import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./component/index"
import StoriesPage from "./component/storiesDetailedPage"
import ShopAll from './component/shopAll';
import AllStoriesPage from './component/allStoriesPage';

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
    element : <AllStoriesPage />
  },

  {
    path: "/shopall",
    element: <ShopAll />
  },

  // {
  //   path: "/allStories",
  //   element: <AllStoriesPage />
  // },

] );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
