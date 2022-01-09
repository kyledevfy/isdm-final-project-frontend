import React, { useRef, useState } from "react";
import { createEmployee, generateEmployeeId } from "../services/employees";
import { useDispatch } from "react-redux";
import { getEmployees } from "../services/employees";
import { loadEmployees } from "../state/employees";

const AddEmployeeModal = (props) => {
  const lastname = useRef();
  const firstname = useRef();
  const middlename = useRef();
  const driver = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [msgColor, setMsgColor] = useState("green");
  const dispatch = useDispatch();

  const addNewEmployee = async (event) => {
    event.preventDefault();
    const empId = await generateEmployeeId();
    const newEmp = {
      employeeId: empId,
      lastname: lastname.current.value,
      firstname: firstname.current.value,
      middlename: middlename.current.value,
      isDriver: driver.current.value === "Yes" ? true : false,
      status: true,
    };
    const newEmployee = await createEmployee(newEmp);

    if (newEmployee.success) {
      setMsgColor("green");
      setSuccessMessage("New employee added successfully");
      const employees = await getEmployees();
      if (employees.success) {
        dispatch(loadEmployees(employees.data));
      }
    } else {
      setMsgColor("red");
      setSuccessMessage("An error occurred in adding new employee");
    }
  };

  return (
    <div
      id="add-modal"
      aria-hidden="true"
      className={`${
        props.toggleModal ? "" : "hidden"
      } fixed font-nunito overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center h-screen w-screen inset-0 bg-slate-500/[0.5]`}
    >
      <div className="w-full max-w-md h-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="add-modal"
              onClick={() => {
                props.setToggleModal(false);
                setSuccessMessage("");
                lastname.current.value = "";
                firstname.current.value = "";
                middlename.current.value = "";
              }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form
            className="space-y-4 px-6 lg:px-8 pb-6 xl:pb-8 overflow-y-auto"
            onSubmit={addNewEmployee}
          >
            <h3 className="text-xl text-center font-bold text-cyan-600">
              Add New Employee
            </h3>
            <div>
              <input
                type="lastname"
                name="lastname"
                id="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Lastname"
                required
                ref={lastname}
              />
            </div>
            <div>
              <input
                type="firstname"
                name="firstname"
                id="firstname"
                placeholder="Firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                ref={firstname}
              />
            </div>
            <div>
              <input
                type="middlename"
                name="middlename"
                id="middlename"
                placeholder="Middlename"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                ref={middlename}
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="mr-2">Driver:</p>
              <select
                name="isDriver"
                id="isDriver"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                ref={driver}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button
              type="submit"
              className="text-white w-full flex justify-center font-bold items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br rounded-lg text-lg px-3 py-2 text-center"
            >
              Add
            </button>
            <p
              className={`text-sm font-medium text-${msgColor}-500 text-center`}
            >
              {successMessage}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
