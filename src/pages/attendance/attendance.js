import React, { useState, useEffect } from "react";
import AttendanceDatepicker from "../../components/attendanceDatepicker";
import AttendanceTable from "../../components/attendanceTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAttendance } from "../../services/attendance";
import { loadAttendance } from "../../state/attendance";
import { useDispatch } from "react-redux";

const Attendance = (props) => {
  const loginStatus = useSelector((state) => state.loginStatus.value);

  const dispatch = useDispatch();

  const fetchAttendance = async () => {
    const attendance = await getAttendance(props.date);
    if (attendance.success) {
      dispatch(loadAttendance(attendance.data));
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [props.date]);

  return (
    <>
      {loginStatus ? (
        <div className="attendance relative min-h-screen bg-gray-100 overflow-x-hidden">
          <Sidebar
            sidebarActive={props.sidebarActive}
            setSidebarActive={props.setSidebarActive}
          />
          <div
            className={`attendance-body ${
              props.sidebarActive ? "pl-64" : "pl-0"
            } lg:pl-64`}
          >
            <Header
              headerTitle={"Attendance"}
              sidebarActive={props.sidebarActive}
              setSidebarActive={props.setSidebarActive}
            />
            <div className="attendance-content pt-20 px-5 font-nunito">
              <div className="flex justify-end items-center py-2">
                <span className="text-gray-600 mr-3 text-lg">
                  Select Date Range:{" "}
                </span>
                <AttendanceDatepicker
                  setDate={props.setDate}
                  date={props.date}
                />
              </div>
              <AttendanceTable empId={props.empId} setEmpId={props.setEmpId} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Attendance;
