import React from "react";
import {
  BsFillPersonFill,
  BsFillGrid1X2Fill,
  BsFillFileEarmarkTextFill,
  BsGearFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { useLocation, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  var currentRoute = useLocation().pathname;
  return (
    <div
      className={`sidebar fixed ${
        props.sidebarActive ? "left-0" : "-left-64"
      } lg:left-0 flex flex-col w-64 h-screen min-h-screen px-4 py-8 bg-white border-r`}
    >
      <h2 className="text-3xl text-center font-bold font-nunito text-cyan-600 mb-4">
        Cagayan Educational Supply
      </h2>
      <div className="flex flex-col justify-between flex-1 mt-6 overflow-y-auto">
        <nav>
          <NavLink
            className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
              currentRoute === "/" ? "bg-gray-200" : ""
            }`}
            to="/"
          >
            <BsFillGrid1X2Fill size={18} className="text-cyan-600" />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>

          <NavLink
            className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
              currentRoute === "/employees" ||
              currentRoute === "/employees/inactive"
                ? "bg-gray-200"
                : ""
            }`}
            to="/employees"
          >
            <BsFillPersonFill size={18} className="text-cyan-600" />
            <span className="mx-4 font-medium">Empoloyees</span>
          </NavLink>

          <NavLink
            className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
              currentRoute === "/attendance" ? "bg-gray-200" : ""
            }`}
            to="#"
          >
            <BsFillFileEarmarkTextFill size={18} className="text-cyan-600" />

            <span className="mx-4 font-medium">Attendance</span>
          </NavLink>

          <NavLink
            className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
              currentRoute === "/settings" ? "bg-gray-200" : ""
            }`}
            to="#"
          >
            <BsGearFill size={18} className="text-cyan-600" />

            <span className="mx-4 font-medium">Settings</span>
          </NavLink>

          <hr className="my-6 border-gray-200" />
        </nav>
        <NavLink to="/login">
          <div className="flex items-center cursor-pointer px-4 py-2 transition-colors duration-200 transform rounded-md text-red-500 hover:bg-gray-200 hover:text-red-600">
            <MdLogout size={22} />
            <h4 className="ml-2 mr-6 font-medium">Logout</h4>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
