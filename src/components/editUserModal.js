import React, { useRef, useState } from "react";
import { updateUserPassword } from "../services/users";

const EditUserModal = (props) => {
  const password = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [msgColor, setMsgColor] = useState("green");

  const editUser = async (event) => {
    event.preventDefault();
    const response = await updateUserPassword(
      props.userEditId,
      password.current.value
    );
    if (response.success) {
      setMsgColor("green");
      setSuccessMessage("User password edited successfully");
      props.setAddedOrEdited(true);
      password.current.value = "";
    } else {
      setMsgColor("red");
      setSuccessMessage("User password edit unsuccessful");
      password.current.value = "";
    }
  };
  return (
    <div
      id="add-modal"
      aria-hidden="true"
      className={`${
        props.toggleEditModal ? "" : "hidden"
      } fixed font-nunito overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center h-screen w-screen inset-0 bg-slate-500/[0.5]`}
    >
      <div className="w-full max-w-md h-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              data-modal-toggle="add-modal"
              onClick={() => {
                props.setToggleEditModal(false);
                setSuccessMessage("");
                password.current.value = "";
              }}
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
            onSubmit={editUser}
          >
            <h3 className="text-xl text-center font-bold text-cyan-600">
              Edit User Password
            </h3>
            <div>
              <input
                type="password"
                name="password"
                id="editpassword"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                ref={password}
              />
            </div>
            <button
              type="submit"
              className="text-white w-full flex justify-center font-bold items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br rounded-lg text-lg px-3 py-2 text-center"
            >
              Edit
            </button>
            <p
              className={`text-sm font-medium text-${msgColor}-500 text-center`}
            >
              {successMessage}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
