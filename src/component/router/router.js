import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ListAll from "../ListAll/ListAll";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/listall",
    element: <ListAll />,
  },
]);

export default Router;
