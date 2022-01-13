import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import SettingsUsersTable from "../../components/settingsUsersTable";
import Sidebar from "../../components/sidebar";
import { MdOutlinePersonAdd } from "react-icons/md";
import AddUserModal from "../../components/addUserModal";
import EditUserModal from "../../components/editUserModal";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../services/users";

const Settings = (props) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [addedOrEdited, setAddedOrEdited] = useState(false);
  const [users, setUser] = useState([]);
  const [userEditId, setUserEditId] = useState(1);
  const loginStatus = useSelector((state) => state.loginStatus.value);

  const loadUsers = async () => {
    const response = await getUsers();
    if (response.success) {
      setUser(response.data);
    }
  };

  useEffect(() => {
    loadUsers();
    return () => {
      setAddedOrEdited(false);
    };
  }, [addedOrEdited]);

  return (
    <>
      {loginStatus ? (
        <div className="settings relative min-h-screen bg-gray-100 overflow-x-hidden">
          <Sidebar
            sidebarActive={props.sidebarActive}
            setSidebarActive={props.setSidebarActive}
          />
          <div
            className={`settings-body ${
              props.sidebarActive ? "pl-64" : "pl-0"
            } lg:pl-64`}
          >
            <Header
              headerTitle={"Settings"}
              sidebarActive={props.sidebarActive}
              setSidebarActive={props.setSidebarActive}
            />
            <div className="settings-content pt-20 px-5 font-nunito">
              <div className="settings-actions flex justify-end mb-1">
                <button
                  type="button"
                  className="text-white flex justify-center font-bold items-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br rounded-lg text-md px-2 py-1.5 mr-3 text-center"
                  onClick={() => setToggleModal(true)}
                >
                  <MdOutlinePersonAdd size={22} className="mr-2" />
                  Add
                </button>
              </div>
              <SettingsUsersTable
                toggleEditModal={toggleEditModal}
                setToggleEditModal={setToggleEditModal}
                setUserEditId={setUserEditId}
                users={users}
              />
              <AddUserModal
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
                addedOrEdited={addedOrEdited}
              />
              <EditUserModal
                toggleEditModal={toggleEditModal}
                setToggleEditModal={setToggleEditModal}
                userEditId={userEditId}
                addedOrEdited={addedOrEdited}
              />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Settings;
