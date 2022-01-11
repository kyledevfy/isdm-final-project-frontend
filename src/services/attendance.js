import api from "./api";

export async function getAttendance(dateRange) {
  try {
    const response = await api({
      url: "/attendances/range",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "post",
      data: {
        startDate: dateRange[0],
        endDate: dateRange[1],
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function getAttendanceById(empId, dateRange) {
  try {
    const response = await api({
      url: "/attendances/rangebyid",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "post",
      data: {
        employeeId: empId,
        startDate: dateRange[0],
        endDate: dateRange[1],
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
