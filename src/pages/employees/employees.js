import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const Employees = () => {
  return (
    <div className="employees relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="employees-body ml-0 lg:ml-64">
        <Header headerTitle={"Employees"} />
      </div>
    </div>
  );
};

export default Employees;
