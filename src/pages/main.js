import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getUser } from "../services/auth";
import { changeLoginStatus } from "../state/loginStatus";
import Attendance from "./attendance/attendance";
import IndividualAttendance from "./attendance/individualAttendance";
import Employees from "./employees/employees";
import InactiveEmployees from "./employees/inactiveEmployees";
import Home from "./home/home";
import Login from "./login/login";
import Settings from "./settings/settings";

const Main = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  const dispatch = useDispatch();

  const handleLoginStatus = async () => {
    if (
      localStorage.getItem("cesJwt") !== null &&
      localStorage.getItem("cesUserId") !== null
    ) {
      // localStorage.removeItem("cesJwt");
      // localStorage.removeItem("cesUserId");
      const response = await getUser(localStorage.getItem("cesUserId"));
      if (response.success) {
        dispatch(changeLoginStatus(response.success));
      }
    }
  };

  useEffect(() => {
    handleLoginStatus();
  });

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
