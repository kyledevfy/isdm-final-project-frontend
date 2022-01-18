import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Home = (props) => {
  const loginStatus = useSelector((state) => state.loginStatus.value);

  return (
    <>
      {loginStatus ? (
        <div className="home relative min-h-screen bg-gray-100">
          <Sidebar
            sidebarActive={props.sidebarActive}
            setSidebarActive={props.setSidebarActive}
          />
          <div className="home-body ml-0 lg:ml-64">
            <Header
              headerTitle={"Home"}
              sidebarActive={props.sidebarActive}
              setSidebarActive={props.setSidebarActive}
            />
            <div className="home-content pt-20 px-5 font-nunito">
              <div className="home-logo w-56 md:w-72 mx-auto mb-5">
                <img src={logo} alt="CES Logo" />
              </div>
              <div className="home-name text-center mb-6">
                <h1 className="text-4xl text-gray-600 font-bold">
                  Cagayan Educational Supply
                </h1>
              </div>
              <div className="home-quick-links grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <Link to={"/employees"}>
                  <div className="bg-white text-cyan-600 rounded-lg h-40 flex justify-center items-center hover:drop-shadow-md">
                    <h1 className="font-bold text-xl">Employees</h1>
                  </div>
                </Link>
                <Link to={"/attendance"}>
                  <div className="bg-white text-cyan-600 rounded-lg h-40 flex justify-center items-center hover:drop-shadow-md">
                    <h1 className="font-bold text-xl">Attendance</h1>
                  </div>
                </Link>
                <Link to={"/settings"}>
                  <div className="bg-white text-cyan-600 rounded-lg h-40 flex justify-center items-center hover:drop-shadow-md">
                    <h1 className="font-bold text-xl">Settings</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;
