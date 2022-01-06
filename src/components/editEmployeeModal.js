import React from "react";

const EditEmployeeModal = (props) => {
  return (
    <div
      id="edit-modal"
      aria-hidden="true"
      className={`${
        props.toggleEditModal ? "" : "hidden"
      } fixed font-nunito overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center h-full w-full inset-0 bg-slate-500/[0.5]`}
    >
      <div className="w-full max-w-md h-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="add-modal"
              onClick={() => props.setToggleEditModal(false)}
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
            action="#"
          >
            <h3 className="text-xl text-center font-bold text-cyan-600">
              Edit Employee
            </h3>
            <div>
              <input
                type="lastname"
                name="lastname"
                id="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Lastname"
                required
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
              />
            </div>
            <div>
              <input
                type="street"
                name="street"
                id="street"
                placeholder="Street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <input
                type="barangay"
                name="barangay"
                id="barangay"
                placeholder="Barangay"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <input
                type="cityMun"
                name="cityMun"
                id="cityMun"
                placeholder="City/Municipality"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <input
                type="province"
                name="province"
                id="province"
                placeholder="Province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex justify-start items-center">
              <div className="label mr-6">
                <p>Driver?</p>
              </div>
              <div className="radio flex justify-start items-center">
                <div className="form-check mr-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="driverRadio"
                    id="driverYes"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="driverYes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="driverRadio"
                    id="driverNo"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="driverNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="label mr-6">
                <p>Status: </p>
              </div>
              <div className="radio flex justify-center items-center">
                <div className="form-check mr-5">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="statusRadio"
                    id="statusActive"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="statusActive"
                  >
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-cyan-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="statusRadio"
                    id="statusInactive"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="statusInactive"
                  >
                    Inactive
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="text-white w-full flex justify-center font-bold items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br rounded-lg text-lg px-3 py-2 text-center"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
