import React, { useState, useEffect } from "react";
import EmployeeTable from "../../components/employeeTable";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { MdKeyboardBackspace } from "react-icons/md";
import EditEmployeeModal from "../../components/editEmployeeModal";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEmployees } from "../../services/employees";
import { useDispatch } from "react-redux";
import { loadEmployees } from "../../state/employees";

const InactiveEmployees = (props) => {
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const [editId, setEditId] = useState(0);
  const dispatch = useDispatch();

  const fetchEmployees = async () => {
    const employees = await getEmployees();
    if (employees.success) {
      dispatch(loadEmployees(employees.data.data));
    }
  };

  useEffect(() => {
    fetchEmployees();
  });

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
                status={false}
                toggleEditModal={toggleEditModal}
                setToggleEditModal={setToggleEditModal}
                setEditId={setEditId}
              />
              <EditEmployeeModal
                toggleEditModal={toggleEditModal}
                setToggleEditModal={setToggleEditModal}
                editId={editId}
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

export default InactiveEmployees;
