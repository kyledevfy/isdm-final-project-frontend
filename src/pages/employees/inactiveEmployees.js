import React, { useState } from "react";
import EmployeeTable from "../../components/employeeTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { MdKeyboardBackspace } from "react-icons/md";
import AddEmployeeModal from "../../components/addEmployeeModal";
import EditEmployeeModal from "../../components/editEmployeeModal";
import { Link } from "react-router-dom";

const InactiveEmployees = (props) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleEditModal, setToggleEditModal] = useState(false);

  return (
    <div className="employees relative min-h-screen bg-gray-100 overflow-x-hidden">
      <Sidebar
        sidebarActive={props.sidebarActive}
        setSidebarActive={props.setSidebarActive}
      />
      <div
        className={`employees-body ${
          props.sidebarActive ? "pl-64" : "pl-0"
        } lg:pl-64`}
      >
        <Header
          headerTitle={"Employees / Inactive"}
          sidebarActive={props.sidebarActive}
          setSidebarActive={props.setSidebarActive}
        />
        <div className="employees-content pt-20 px-5 font-nunito">
          <div className="undo-arrow flex justify-start items-center py-1.5">
            <Link to={"/employees"}>
              <MdKeyboardBackspace
                size={28}
                className="text-cyan-600 font-bold hover:text-cyan-700"
              />
            </Link>
          </div>
          <EmployeeTable
            toggleEditModal={toggleEditModal}
            setToggleEditModal={setToggleEditModal}
          />
          <AddEmployeeModal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
          <EditEmployeeModal
            toggleEditModal={toggleEditModal}
            setToggleEditModal={setToggleEditModal}
          />
        </div>
      </div>
    </div>
  );
};

export default InactiveEmployees;
