import React from "react";
import AttendanceDatepicker from "../../components/attendanceDatepicker";
import AttendanceTable from "../../components/attendanceTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const Attendance = (props) => {
  return (
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
            <AttendanceDatepicker />
          </div>
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
