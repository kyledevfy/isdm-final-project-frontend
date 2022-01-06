import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "./attendance/attendance";
import IndividualAttendance from "./attendance/individualAttendance";
import Employees from "./employees/employees";
import InactiveEmployees from "./employees/inactiveEmployees";
import Home from "./home/home";
import Login from "./login/login";
import Settings from "./settings/settings";

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
        <Route
          exact
          path="/attendance"
          element={
            <Attendance
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          }
        />
        <Route
          exact
          path="/attendance/individual"
          element={
            <IndividualAttendance
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <Settings
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
