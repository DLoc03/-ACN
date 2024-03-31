import "./App.css";
import Router from "./component/router/router";
import { RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import ListAll from "./component/ListAll/ListAll";
import React from "react";
function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
