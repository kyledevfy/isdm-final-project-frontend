import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://ces-attendance-backend.herokuapp.com/api",
});

export default api;
