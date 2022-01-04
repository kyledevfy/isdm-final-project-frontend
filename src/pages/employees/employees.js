import React from "react";
import EmployeeTable from "../../components/employeeTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const Employees = () => {
  return (
    <div className="employees relative min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar />
      <div className="employees-body pl-0 lg:pl-64">
        <Header headerTitle={"Employees"} />
        <div className="employees-content pt-16 px-5">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
};

export default Employees;
