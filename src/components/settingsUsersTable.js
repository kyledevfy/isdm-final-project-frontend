import React from "react";

const SettingsUsersTable = (props) => {
  const TableRow = ({ data }) => {
    return (
      <tr className="bg-white border-b">
        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
          {data.id}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.username}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.email}
        </td>
        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
          {data.confirmed.toString()}
        </td>
        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-900"
            onClick={() => {
              props.setToggleEditModal(true);
              props.setUserEditId(data.id);
            }}
          >
            Edit
          </a>
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
                {props.users.map((value, index) => {
                  return <TableRow key={index} data={value} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUsersTable;
