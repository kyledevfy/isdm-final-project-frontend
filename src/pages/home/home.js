import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const Home = () => {
  return (
    <>
      <div className="home relative min-h-screen bg-gray-100">
        <Sidebar />
        <div className="home-body ml-0 lg:ml-64">
          <Header headerTitle={"Home"} />
          <h1>Hello World</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
