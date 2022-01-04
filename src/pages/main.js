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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
};

export default Main;
