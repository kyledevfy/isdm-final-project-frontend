import React, { useState } from "react";
import EmployeeTable from "../../components/employeeTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { MdOutlinePersonAdd, MdDangerous } from "react-icons/md";
import AddEmployeeModal from "../../components/addEmployeeModal";
import EditEmployeeModal from "../../components/editEmployeeModal";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Employees = (props) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus.value);

  return (
    <>
      {loginStatus ? (
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
              headerTitle={"Employees"}
              sidebarActive={props.sidebarActive}
              setSidebarActive={props.setSidebarActive}
            />
            <div className="employees-content pt-20 px-5 font-nunito">
              <div className="employees-actions flex justify-end mb-1">
                <button
                  type="button"
                  className="text-white flex justify-center font-bold items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br rounded-lg text-md px-2 py-1.5 mr-3 text-center"
                  onClick={() => setToggleModal(true)}
                >
                  <MdOutlinePersonAdd size={22} className="mr-2" />
                  Add
                </button>
                <Link to={"/employees/inactive"}>
                  <button
                    type="button"
                    className="text-white flex justify-center font-bold items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br rounded-lg text-md px-2 py-1.5 text-center"
                    onClick={() => setToggleModal(true)}
                  >
                    <MdDangerous size={22} className="mr-2" />
                    Inactive
                  </button>
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
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Employees;
