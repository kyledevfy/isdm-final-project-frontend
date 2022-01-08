import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
            <h1>Hello World</h1>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;
