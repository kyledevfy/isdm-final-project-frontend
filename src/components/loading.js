import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center font-nunito">
      <div className="loading-content text-center">
        <h1 className="text-3xl font-bold text-cyan-600 mb-6">
          Cagayan Educational Supply
        </h1>
        <SyncLoader size={20} color="#0891B2" />
      </div>
    </div>
  );
};

export default Loading;
