import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Employees from "./employees/employees";
import InactiveEmployees from "./employees/inactiveEmployees";
import Home from "./home/home";
import Login from "./login/login";

const Main = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  return (
    <div className="main">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/employees"
          element={
            <Employees
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          }
        />
        <Route
          exact
          path="/employees/inactive"
          element={
            <InactiveEmployees
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
