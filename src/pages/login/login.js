import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-cyan-400 via-cyan-500 to-cyan-600 i justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Cagayan Educational Supply
          </h1>
          <p className="text-white mt-1">
            The most popular educational supplier in CdeO
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white w-2/5">
          <h1 className="text-gray-800 font-bold text-4xl mb-1">Hi there!</h1>
          <p className="text-lg font-normal text-gray-600 mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 w-full outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="pl-2 w-full outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="text-white w-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>

          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;