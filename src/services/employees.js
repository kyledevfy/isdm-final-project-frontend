import api from "./api";

export async function generateEmployeeId() {
  const date = new Date();
  var num = date.getFullYear() * 10000;
  const response = await getEmployees();
  var empId = "CES" + (num + response.data.data.length + 1).toString();

  return empId;
}

export async function getEmployees() {
  try {
    const response = await api({
      url: "/employees",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "get",
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getEmployee(id) {
  try {
    const response = await api({
      url: "/employees/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "get",
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function createEmployee(newEmployee) {
  try {
    const response = await api({
      url: "/employees",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "post",
      data: { data: newEmployee },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function updateEmployee(id, employee) {
  try {
    const response = await api({
      url: "/employees/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "put",
      data: { data: employee },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
