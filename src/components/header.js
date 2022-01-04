import React from "react";
import { MdAccountCircle } from "react-icons/md";

const Header = ({ headerTitle }) => {
  return (
    <div className="header bg-white border-b flex justify-between items-center px-5 py-4">
      <div className="header-title">
        <h1 className="text-2xl text-cyan-600 font-bold font-nunito">
          {headerTitle}
        </h1>
      </div>
      <div className="header-profile">
        <div className="flex items-center px-4 -mx-2">
          <MdAccountCircle size={30} className="text-cyan-600" />
          <h4 className="ml-2 font-medium text-gray-600">John Doe</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
