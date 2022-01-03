import React from "react";
import {
  BsFillPersonFill,
  BsFillGrid1X2Fill,
  BsFillFileEarmarkTextFill,
  BsGearFill,
} from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <h2 className="text-3xl text-center font-semibold text-blue-800 mb-4">
        Cagayan Educational Supply
      </h2>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
            href="#"
          >
            <BsFillGrid1X2Fill size={18} className="text-blue-800" />
            <span className="mx-4 font-medium">Home</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            <BsFillPersonFill size={18} className="text-blue-800" />
            <span className="mx-4 font-medium">Empoloyees</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            <BsFillFileEarmarkTextFill size={18} className="text-blue-800" />

            <span className="mx-4 font-medium">Attendance</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700"
            href="#"
          >
            <BsGearFill size={18} className="text-blue-800" />

            <span className="mx-4 font-medium">Settings</span>
          </a>

          <hr className="my-6 border-gray-200" />
        </nav>

        <div className="flex items-center px-4 -mx-2">
          <MdAccountCircle size={28} className="text-blue-800" />
          <h4 className="mx-2 font-medium text-gray-800 hover:underline">
            John Doe
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
