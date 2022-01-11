import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/loading";
import { getUser } from "../services/auth";
import { getEmployees } from "../services/employees";
import { loadEmployees } from "../state/employees";
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
  const [loading, setLoading] = useState(true);
  const [empId, setEmpId] = useState("");
  const dateNow = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState([dateNow, dateNow]);
  const dispatch = useDispatch();

  const loadState = async () => {
    if (
      localStorage.getItem("cesJwt") !== null &&
      localStorage.getItem("cesUserId") !== null
    ) {
      const user = await getUser(localStorage.getItem("cesUserId"));
      const employees = await getEmployees();
      if (user.success) {
        dispatch(changeLoginStatus(user.success));
      }

      if (employees.success) {
        dispatch(loadEmployees(employees.data));
      }
    }
  };

  useEffect(() => {
    loadState();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                  empId={empId}
                  setEmpId={setEmpId}
                  date={date}
                  setDate={setDate}
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
                  empId={empId}
                  setEmpId={setEmpId}
                  date={date}
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
      )}
    </>
  );
};

export default Main;
