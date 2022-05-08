import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StudentRoute from "../src/routes/StudentRoute";
import "./global.css";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <StudentRoute />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
