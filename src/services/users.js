import api from "./api";

export async function getUsers() {
  try {
    const response = await api({
      url: "/users",
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

export async function getUser(id) {
  try {
    const response = await api({
      url: "/users/" + id,
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

export async function updateUserPassword(id, password) {
  try {
    const response = await api({
      url: "/users/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "put",
      data: { password: password },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function createUser(newUser) {
  try {
    const response = await api({
      url: "/users",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("cesJwt"),
      },
      method: "post",
      data: newUser,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error };
  }
}
