import axios from "axios";
const axiosAuthed = axios.create({
  baseURL: "http://localhost:3004",
});

export default axiosAuthed;
