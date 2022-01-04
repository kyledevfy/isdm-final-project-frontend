import React from "react";

const EmployeeTable = () => {
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
                    EmployeeID
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    IsDriver
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative py-3 px-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210001
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    John Doe Smith
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    False
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Active
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210001
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    John Doe Smith
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    False
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Active
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210001
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    John Doe Smith
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    False
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Active
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210001
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    John Doe Smith
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    False
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Active
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" className="text-blue-600 hover:text-blue-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210001
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    John Doe Smith
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    False
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Active
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

export default EmployeeTable;
