import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ListAll from "../ListAll/ListAll";
import LoginPage from "../LoginPage/login_page";
import AboutUs from "../AboutUs/AboutUs";
import ResigterPage from "../ResigterPage/resigter_page";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/listall",
    element: <ListAll />,
  },

  { path: "/loginform", element: <LoginPage /> },

  { path: "/aboutus", element: <AboutUs /> },

  { path: "resigterform", element: <ResigterPage /> },
]);

export default Router;
