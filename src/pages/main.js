import React from "react";
import { Route, Routes } from "react-router-dom";
import Employees from "./employees/employees";
import Home from "./home/home";
import Login from "./login/login";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
};

export default Main;
