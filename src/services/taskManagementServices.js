import axiosAuthed from "../constant/AxiosConfig";

export const getAllTasks = () =>
  axiosAuthed
    .get("/tasks")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
