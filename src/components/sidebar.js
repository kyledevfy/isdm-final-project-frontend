import React from "react";
import {
  BsFillPersonFill,
  BsFillGrid1X2Fill,
  BsFillFileEarmarkTextFill,
  BsGearFill,
} from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar absolute -left-64 lg:left-0 flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl text-center font-bold font-nunito text-cyan-600 mb-4">
        Cagayan Educational Supply
      </h2>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="/"
          >
            <BsFillGrid1X2Fill size={18} className="text-cyan-600" />
            <span className="mx-4 font-medium">Home</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="/employees"
          >
            <BsFillPersonFill size={18} className="text-cyan-600" />
            <span className="mx-4 font-medium">Empoloyees</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            <BsFillFileEarmarkTextFill size={18} className="text-cyan-600" />

            <span className="mx-4 font-medium">Attendance</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            <BsGearFill size={18} className="text-cyan-600" />

            <span className="mx-4 font-medium">Settings</span>
          </a>

          <hr className="my-6 border-gray-200" />
        </nav>
        <div className="flex items-center cursor-pointer px-4 py-2 transition-colors duration-200 transform rounded-md text-red-500 hover:bg-gray-200 hover:text-red-600">
          <MdLogout size={22} />
          <h4 className="ml-2 mr-6 font-medium">Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;