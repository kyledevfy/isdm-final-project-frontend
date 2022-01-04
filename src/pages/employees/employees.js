import React from "react";
import EmployeeTable from "../../components/employeeTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const Employees = (props) => {
  var contentPadding = props.sidebarActive ? "pl-64" : "pl-0";
  return (
    <div className="employees relative min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar
        sidebarActive={props.sidebarActive}
        setSidebarActive={props.setSidebarActive}
      />
      <div className={`employees-body pl-0 ${contentPadding} lg:pl-64`}>
        <Header
          headerTitle={"Employees"}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />
        <div className="employees-content pt-16 px-5">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Employees;
