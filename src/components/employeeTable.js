import React from "react";
import { useSelector } from "react-redux";

const EmployeeTable = (props) => {
  const employees = useSelector((state) => state.employees.value);
  console.log(employees);
  const TableRow = ({ data }) => {
    const rowData = data.attributes;
    return (
      <tr className="bg-white border-b">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
          {rowData.employeeId}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {rowData.lastname +
            ", " +
            rowData.firstname +
            " " +
            rowData.middlename}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {rowData.isDriver ? "Yes" : "No"}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {rowData.status ? "Active" : "Inactive"}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <p
            className="text-blue-600 hover:text-blue-900 cursor-pointer"
            onClick={() => {
              props.setToggleEditModal(true);
              props.setEditId(data.id);
            }}
          >
            Edit
          </p>
        </td>
      </tr>
    );
  };
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
                {employees.map((value, index) => {
                  if (props.status) {
                    if (value.attributes.status) {
                      return <TableRow key={index} data={value} />;
                    }
                  } else {
                    if (!value.attributes.status) {
                      return <TableRow key={index} data={value} />;
                    }
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
