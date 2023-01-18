import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "./App.css";


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
