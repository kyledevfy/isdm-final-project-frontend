import api from "./api";

export async function userLogin(identifier, password) {
  try {
    const response = await api({
      url: "/auth/local",
      method: "post",
      data: {
        identifier: identifier,
        password: password,
      },
    });
    localStorage.setItem("cesJwt", response.data.jwt);
    localStorage.setItem("cesUserId", response.data.user.id);
    return { success: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

export async function userLogout() {
  localStorage.removeItem("cesJwt");
  localStorage.removeItem("cesUserId");
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
