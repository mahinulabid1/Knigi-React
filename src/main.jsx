import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./component/index"
import "../public/scss/dist/component/navigation.css";



const router = createBrowserRouter ( [
  {
    path: "/",
    element: <Homepage/>,
  }

] );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
