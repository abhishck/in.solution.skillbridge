import axios from "axios";

const API = axios.create({
  baseURL: "https://in-solution-skillbridge.onrender.com/api",
});

export default API;