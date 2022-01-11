import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IndividualAttendanceTable = (props) => {
  const attendance = useSelector((state) => state.attendance.value);
  const employees = useSelector((state) => state.employees.value);

  const getEmployee = (id) => {
    const emp = employees.data;
    var employee = {};

    for (var i = 0; i < emp.length; i++) {
      if (emp[i].attributes.employeeId === id) {
        employee = emp[i].attributes;
        break;
      }
    }

    return employee;
  };

  const TableRow = ({ data }) => {
    const employee = getEmployee(data.employeeId);
    return (
      <tr className="bg-white border-b">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
          {data.employeeId}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {`${employee.lastname}, ${employee.firstname} ${employee.middlename}`}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.timeIn.substring(0, 5)}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.timeOut.substring(0, 5)}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.date}
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
                </tr>
              </thead>
              <tbody>
                {attendance.map((value, index) => {
                  if (value.employeeId === props.empId) {
                    return <TableRow key={index} data={value} />;
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

export default IndividualAttendanceTable;
