import React from "react";

const SettingsUsersTable = (props) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden sm:rounded-lg border">
            <table className="min-w-full font-nunito">
              <thead className="bg-cyan-600">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Confirmed
                  </th>
                  <th scope="col" className="relative py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    1
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    sage
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    sage@gmail.com
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    true
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => props.setToggleEditModal(true)}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    2
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    yoru
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    yoru@gmail.com
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    true
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    3
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    viper
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    viper@gmail.com
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    true
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    4
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    reyna
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    reyna@gmail.com
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    true
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    5
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    raze
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    raze@gmail.com
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    true
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUsersTable;
