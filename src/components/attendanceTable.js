import React from "react";
import { Link } from "react-router-dom";

const AttendanceTable = (props) => {
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
                    Time in
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Time out
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase"
                  >
                    Date
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
                    6:56 AM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    5:03 PM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    2021-01-02
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <Link
                      to="/attendance/individual"
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Open
                    </Link>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210002
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Jane Doe
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    6:58 AM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    5:02 PM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    2021-01-02
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <Link
                      to="/attendance/individual"
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Open
                    </Link>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    CES20210003
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    Pedro Penduko
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    6:53 AM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    5:07 PM
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    2021-01-02
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <Link
                      to="/attendance/individual"
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Open
                    </Link>
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

export default AttendanceTable;